import { baseCv } from "./baseCv";
import { itSupport } from "./versions/it-support";
import { customerSupport } from "./versions/customer-support";
import { servicePractical } from "./versions/service-practical";

// Slugs in this map become the public URLs, for example /cv/it-support and
// /api/cv-pdf/it-support.
export const cvVersions = {
  "it-support": itSupport,
  "customer-support": customerSupport,
  "service-practical": servicePractical,
};

export function getCvData(version = "it-support") {
  const selected = cvVersions[version];

  if (!selected) return null;

  // Build one complete CV object from shared defaults plus the selected
  // job-targeted version. Version data wins when it provides an override.
  return {
    ...baseCv,
    ...selected,
    contact: baseCv.contact,
    education: selected.education ?? baseCv.education,
    softSkills: selected.softSkills ?? baseCv.softSkills,
    language: baseCv.language,
  };
}
