import puppeteer from "puppeteer";
import { getCvData } from "@/data/getCvData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Route-injected CSS should only control the print canvas. Visual polish lives
// in globals.css so preview and export stay aligned.
const pdfPageCss = `
  @page { size: A4; margin: 0; }

  html,
  body {
    width: 210mm !important;
    height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    background: #fff !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .no-print { display: none !important; }

  main.cv-page,
  .sheet,
  .sheet-inner,
  .cv-layout {
    width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    box-shadow: none !important;
  }

  .cv-sidebar,
  .cv-main {
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    overflow: visible !important;
  }
`;

async function waitForAssets(page) {
  await page.evaluate(async () => {
    if (document.fonts?.ready) {
      try {
        await document.fonts.ready;
      } catch {}
    }

    await Promise.all(
      Array.from(document.images).map(async (img) => {
        try {
          if (img.decode) await img.decode();
        } catch {}

        if (img.complete) return;

        await new Promise((resolve) => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );
  });
}

export async function GET(req, { params }) {
  const { version } = await params;
  const cvData = getCvData(version);

  if (!cvData) {
    return new Response("Unknown CV version", { status: 404 });
  }

  const { origin } = new URL(req.url);
  const url = `${origin}/cv/${version}?print=1`;

  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.emulateMediaType("print");
    await waitForAssets(page);
    await page.addStyleTag({ content: pdfPageCss });
    await waitForAssets(page);

    const pdf = await page.pdf({
      format: "A4",
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
      margin: { top: "0mm", right: "0mm", bottom: "0mm", left: "0mm" },
      scale: 1,
    });

    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${cvData.fileName}"`,
        "Cache-Control": "no-store",
      },
    });
  } finally {
    await browser.close();
  }
}
