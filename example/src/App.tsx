import "./App.css";

import {
  PremblyDataVerification,
  PremblyDocumentVerification,
  PremblyGeneralVerification,
  PremblyGlobalBusinessVerification,
} from "prembly-pass";

const config = {
  x_api_key: "your-api-key",
  app_id: "your-app-id",
  environment: "test",
};

const premblyDocumentVerification = new PremblyDocumentVerification(config);
const premblyDataVerification = new PremblyDataVerification(config);
const premblyGeneralVerification = new PremblyGeneralVerification(config);
const premblyGlobalBusinessVerification = new PremblyGlobalBusinessVerification(
  config
);

const { nigeria, kenya, ghana, uganda, southAfrica, sierraLeone, rwanda } =
  premblyDataVerification;

function App() {
  const handlePassportVerification = async () => {
    try {
      const passportNumber = "G0000575";
      const response = await ghana.verifyGhanaInternationalPassport(
        passportNumber
      );
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <button onClick={handlePassportVerification}>Verify Passport</button>
    </div>
  );
}

export default App;
