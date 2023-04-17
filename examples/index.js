import {
  PremblyGeneralVerification,
  PremblyGlobalBusinessVerification,
} from "prembly-pass";

const premblyGeneralVerification = new PremblyGeneralVerification(
  "x-api-key",
  "app-id"
);

const premblyGlobalBusinessVerification = new PremblyGlobalBusinessVerification(
  "x-api-key",
  "app-id"
);

// GLOBAL BUSINESS VERIFICATION USAGE
premblyGlobalBusinessVerification
  .verifyCompanyWithRegistrationNumber("1000010", "NG", "test", "123456")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));

//GENERAL VERIFICATION USAGE
const { vehicleVerification } = premblyGeneralVerification;

vehicleVerification("AAA00000000")
  .then((res) => console.log(res))
  .catch((err) => console.error(err));
