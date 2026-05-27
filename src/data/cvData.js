import { getCvData } from "./getCvData";

// Some older components still import cvData directly. Keep this compatibility
// file as a simple alias for the default IT support version.
export const theme = {};

const cvData = getCvData("it-support");

export default cvData;
