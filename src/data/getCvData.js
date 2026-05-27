import { baseCv } from "./baseCv";
import { itSupport } from "./versions/it-support";
import { customerSupport } from "./versions/customer-support";
import { servicePractical } from "./versions/service-practical";

export const cvVersions = {
  "it-support": itSupport,
  "customer-support": customerSupport,
  "service-practical": servicePractical,
};

export function getCvData(version = "it-support") {
  const selected = cvVersions[version];

  if (!selected) return null;

  return {
    ...baseCv,
    ...selected,
    contact: baseCv.contact,
    education: selected.education ?? baseCv.education,
    softSkills: selected.softSkills ?? baseCv.softSkills,
    language: baseCv.language,
  };
}
