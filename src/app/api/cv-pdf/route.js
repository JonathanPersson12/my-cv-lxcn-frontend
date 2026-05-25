// app/api/cv-pdf/route.js
import puppeteer from "puppeteer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req) {
  const { origin } = new URL(req.url);
  const url = `${origin}/cv/print`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  // A4-ish viewport to render the layout correctly on screen
  const PX_PER_MM = 96 / 25.4;
  const A4_W = Math.round(210 * PX_PER_MM); // ~794
  const A4_H = Math.round(297 * PX_PER_MM); // ~1123

  await page.setViewport({ width: A4_W, height: A4_H, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.emulateMediaType("print");

  // Make sure fonts and images are fully ready
  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      try {
        await document.fonts.ready;
      } catch {}
    }
    const imgs = Array.from(document.images);
    await Promise.all(
      imgs.map((img) =>
        img.complete
          ? 1
          : new Promise((r) => {
              img.addEventListener("load", r, { once: true });
              img.addEventListener("error", r, { once: true });
            })
      )
    );
  });

  // Measure the rendered .sheet in pixels
  const dims = await page.evaluate(() => {
    const el = document.querySelector(".sheet");
    if (!el) return { w: 0, h: 0 };
    const r = el.getBoundingClientRect();
    return {
      w: Math.max(r.width, el.scrollWidth),
      h: Math.max(r.height, el.scrollHeight),
    };
  });

  // Convert to millimeters so PDF page matches the on-screen size
  const widthMm = dims.w / (96 / 25.4); // px → mm
  const heightMm = dims.h / (96 / 25.4); // px → mm

  console.log("[cv-pdf] natural size dims(px):", dims, "dims(mm):", {
    widthMm,
    heightMm,
  });

  const pdf = await page.pdf({
    width: `${widthMm}mm`,
    height: `${heightMm}mm`,
    margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
    printBackground: true,
    displayHeaderFooter: false,
    preferCSSPageSize: false,
    scale: 1, // no shrinking / scaling
    pageRanges: "1", // single page
  });

  await browser.close();

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition":
        'attachment; filename="Jonathan-IT-Support-CV.pdf"',
      "Cache-Control": "no-store",
    },
  });
}
