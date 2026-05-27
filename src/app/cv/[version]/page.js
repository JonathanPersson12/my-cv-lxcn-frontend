import { notFound } from "next/navigation";
import CVTemplate from "@/components/CVTemplate";
import { getCvData, cvVersions } from "@/data/getCvData";

export function generateStaticParams() {
  return Object.keys(cvVersions).map((version) => ({ version }));
}

export default async function CVVersionPage({ params, searchParams }) {
  const { version } = await params;
  const query = await searchParams;
  const cvData = getCvData(version);

  if (!cvData) notFound();

  const printMode = query?.print === "1";

  return <CVTemplate cvData={cvData} showDownload={!printMode} />;
}
