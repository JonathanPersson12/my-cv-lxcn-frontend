import fs from "node:fs/promises";
import path from "node:path";

const versions = {
  "it-support": "Jonathan-IT-Support-CV.pdf",
  "customer-support": "Jonathan-Customer-Support-CV.pdf",
  "service-practical": "Jonathan-Service-Practical-CV.pdf",
};

// The export script is intentionally small: it asks the Next.js API route to
// render the PDF, then saves the returned bytes into the local exports folder.
const version = process.argv[2];

if (!version || !versions[version]) {
  console.error(`Usage: node scripts/export-cv-pdf.mjs ${Object.keys(versions).join("|")}`);
  process.exit(1);
}

const baseUrl = process.env.CV_BASE_URL || "http://localhost:3000";
const outputDir = path.join(process.cwd(), "exports");
const outputPath = path.join(outputDir, versions[version]);

await fs.mkdir(outputDir, { recursive: true });

// Each CV version has its own API URL so the same renderer can produce
// different job-targeted PDF files from shared layout code.
const response = await fetch(`${baseUrl}/api/cv-pdf/${version}`);

if (!response.ok) {
  throw new Error(`PDF export failed: ${response.status} ${response.statusText}`);
}

const buffer = Buffer.from(await response.arrayBuffer());
await fs.writeFile(outputPath, buffer);

console.log(`Exported ${outputPath}`);
