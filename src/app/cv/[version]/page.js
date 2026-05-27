import { notFound } from "next/navigation";
import CVTemplate from "@/components/CVTemplate";
import { getCvData, cvVersions } from "@/data/getCvData";

// Next uses this list to know which /cv/[version] pages can be prebuilt.
export function generateStaticParams() {
  return Object.keys(cvVersions).map((version) => ({ version }));
}

export default async function CVVersionPage({ params, searchParams }) {
  const { version } = await params;
  const query = await searchParams;
  const cvData = getCvData(version);

  if (!cvData) notFound();

  // The PDF renderer visits this same page with ?print=1 so UI-only controls
  // like the download button are hidden during export.
  const printMode = query?.print === "1";

  return <CVTemplate cvData={cvData} showDownload={!printMode} />;
}
