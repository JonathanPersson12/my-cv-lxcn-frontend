import puppeteer from "puppeteer";
import { getCvData } from "@/data/getCvData";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// This CSS is injected only while Puppeteer renders the PDF. It overrides the
// screen preview so the output is a strict one-page A4 document.
const compactPdfCss = `
  @page { size: A4; margin: 0; }

  html, body {
    width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
    background: #fff !important;
    overflow: hidden !important;
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }

  .no-print { display: none !important; }

  main.cv-page {
    width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
    background: #fff !important;
    overflow: hidden !important;
  }

  .sheet {
    width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    margin: 0 !important;
    box-shadow: none !important;
    border: 0 !important;
    overflow: hidden !important;
  }

  .sheet-inner {
    width: 100% !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    overflow: hidden !important;
  }

  .sheet-inner > .flex {
    width: 210mm !important;
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    align-items: stretch !important;
  }

  .sheet aside {
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    padding: 10px !important;
    gap: 8px !important;
  }

  .sheet section {
    height: 297mm !important;
    min-height: 297mm !important;
    max-height: 297mm !important;
    padding: 12px 14px !important;
    gap: 3px !important;
  }

  .sheet .w-40 { width: 86px !important; }
  .sheet .h-40 { height: 86px !important; }

  .sheet h1 {
    font-size: 15px !important;
    line-height: 1.12 !important;
    margin-bottom: 4px !important;
  }

  .sheet h2, .sheet h3 {
    font-size: 12px !important;
    line-height: 1.15 !important;
    margin: 0 !important;
  }

  .sheet p,
  .sheet li,
  .sheet span,
  .sheet a,
  .sheet div {
    font-size: 8.2px !important;
    line-height: 1.22 !important;
  }

  .sheet section > p {
    font-size: 9.6px !important;
    line-height: 1.3 !important;
    margin-bottom: 6px !important;
  }

  .sheet ul { margin: 0 !important; padding: 0 !important; }
  .sheet li { margin-bottom: 1.5px !important; }

  .sheet .space-y-6 > :not([hidden]) ~ :not([hidden]) { margin-top: 8px !important; }
  .sheet .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 6px !important; }
  .sheet .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 4px !important; }
  .sheet .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 3px !important; }
  .sheet .space-y-1 > :not([hidden]) ~ :not([hidden]) { margin-top: 1px !important; }

  .sheet .gap-8 { gap: 7px !important; }
  .sheet .gap-6 { gap: 7px !important; }
  .sheet .gap-3 { gap: 4px !important; }
  .sheet .gap-2 { gap: 3px !important; }
  .sheet .gap-1 { gap: 2px !important; }
  .sheet section .space-y-4 > :not([hidden]) ~ :not([hidden]) { margin-top: 4px !important; }
  .sheet section .space-y-3 > :not([hidden]) ~ :not([hidden]) { margin-top: 3px !important; }
  .sheet section .space-y-2 > :not([hidden]) ~ :not([hidden]) { margin-top: 2px !important; }

  .sheet .p-6 { padding: 12px !important; }
  .sheet .p-5 { padding: 10px !important; }
  .sheet .p-3 { padding: 5px !important; }
  .sheet .p-2 { padding: 3px !important; }
  .sheet .p-1 { padding: 2px !important; }
  .sheet .px-2 { padding-left: 4px !important; padding-right: 4px !important; }
  .sheet .py-1 { padding-top: 2px !important; padding-bottom: 2px !important; }

  .sheet .mb-6 { margin-bottom: 5px !important; }
  .sheet .mb-4 { margin-bottom: 5px !important; }
  .sheet .mb-3 { margin-bottom: 4px !important; }
  .sheet .mb-2 { margin-bottom: 3px !important; }
  .sheet .mt-1 { margin-top: 1px !important; }

  .sheet .w-6, .sheet .h-6 { width: 10px !important; height: 10px !important; }
  .sheet .w-4, .sheet .h-4 { width: 8px !important; height: 8px !important; }
  .sheet svg { width: 8px !important; height: 8px !important; }
  .sheet img { max-width: 100% !important; }

  .sheet [class*="shadow"] { box-shadow: none !important; }
  .sheet .rounded-lg { border-radius: 4px !important; }
  .sheet .rounded { border-radius: 3px !important; }

  .sheet .grid.grid-cols-3 { gap: 6px !important; }
  .sheet .tech-skill-icon {
    width: 16px !important;
    height: 16px !important;
  }
  .sheet .tech-skill-item {
    gap: 2px !important;
  }
  .sheet .tech-skill-label {
    font-size: 9px !important;
    max-width: 70px !important;
    line-height: 1.2 !important;
  }
  .sheet .skill-heading-row { gap: 3px !important; }
  .sheet .skill-heading-title { font-size: 11px !important; }
  .sheet .soft-skills-section { margin-top: 8px !important; }
  .sheet section h2 { font-size: 11px !important; }
  .sheet section h3 { font-size: 10px !important; }
  .sheet section p,
  .sheet section li,
  .sheet section li span {
    font-size: 9px !important;
    line-height: 1.25 !important;
  }
  .sheet section .rounded-lg {
    padding: 3px !important;
    margin-bottom: 3px !important;
  }
  .sheet {
    font-family: Arial, Helvetica, sans-serif !important;
    color: #1f2937 !important;
  }

  .sheet img {
    display: block !important;
    max-width: 100% !important;
  }

  .sheet p,
  .sheet li,
  .sheet span,
  .sheet a,
  .sheet div {
    font-size: 10.3px !important;
    line-height: 1.42 !important;
  }

  .sheet .text-xs { font-size: 9.8pt !important; }
  .sheet .text-sm { font-size: 11pt !important; }
  .sheet .text-base { font-size: 12pt !important; }

  .sheet h2,
  .sheet h3 {
    margin-bottom: 4px !important;
  }

  .sheet .skill-heading-row { gap: 4px !important; }
  .sheet .skill-heading-title { line-height: 1.05 !important; }
  .sheet .tech-skill-label { font-size: 10.5px !important; max-width: 90px !important; }
  .sheet .soft-skills-section { margin-top: 10px !important; }
  .sheet a { color: #1e40af !important; text-decoration: none !important; }

  .sheet * {
    word-break: normal !important;
    overflow-wrap: normal !important;
    hyphens: none !important;
  }
`;

export async function GET(req, { params }) {
  const { version } = await params;
  const cvData = getCvData(version);

  if (!cvData) {
    return new Response("Unknown CV version", { status: 404 });
  }

  const { origin } = new URL(req.url);
  const url = `${origin}/cv/${version}?print=1`;

  // Puppeteer opens the same Next page a user sees, waits for images/fonts,
  // then asks Chromium to print that page to PDF.
  const browser = await puppeteer.launch({
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 794, height: 1123, deviceScaleFactor: 1 });
    await page.goto(url, { waitUntil: "networkidle0" });
    await page.emulateMediaType("print");

    // Decode images before printing. Without this, profile/skill icons can be
    // missing or half-loaded in the generated PDF.
    await page.evaluate(async () => {
      if (document.fonts?.ready) {
        try {
          await document.fonts.ready;
        } catch {}
      }

      const imgs = Array.from(document.images);
      await Promise.all(
        imgs.map(async (img) => {
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

    // Add the PDF-specific CSS after the page loads so it wins over the normal
    // app styles during export.
    await page.addStyleTag({ content: compactPdfCss });

    await page.evaluate(async () => {
      if (document.fonts?.ready) {
        try { await document.fonts.ready; } catch {}
      }
      await Promise.all(
        Array.from(document.images).map((img) =>
          img.complete
            ? Promise.resolve()
            : new Promise((resolve) => {
                img.addEventListener("load", resolve, { once: true });
                img.addEventListener("error", resolve, { once: true });
              })
        )
      );
    });

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
