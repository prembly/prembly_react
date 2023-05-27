import GhanaDataVerification from "./countries/Ghana";
import KenyaDataVerification from "./countries/Kenya";
import NigeriaDataVerification from "./countries/Nigeria";
import RwandaDataVerification from "./countries/Rwanda";
import SierraLeoneDataVerification from "./countries/SierraLeone";
import SouthAfricaDataVerification from "./countries/SouthAfrica";
import UgandaDataVerification from "./countries/Uganda";
import { Config } from "../types";

class PremblyDataVerification {
  nigeria: NigeriaDataVerification;
  kenya: KenyaDataVerification;
  ghana: GhanaDataVerification;
  uganda: UgandaDataVerification;
  southAfrica: SouthAfricaDataVerification;
  sierraLeone: SierraLeoneDataVerification;
  rwanda: RwandaDataVerification;

  /**
   * The `PremblyDataVerification` class provides methods for verifying various types of data using Prembly's identitypass API.
   * @class
   * @param {Config} config - The configuration object.
   */
  constructor(config: Config) {
    // METHODS
    this.nigeria = new NigeriaDataVerification(config);
    this.kenya = new KenyaDataVerification(config);
    this.ghana = new GhanaDataVerification(config);
    this.uganda = new UgandaDataVerification(config);
    this.southAfrica = new SouthAfricaDataVerification(config);
    this.sierraLeone = new SierraLeoneDataVerification(config);
    this.rwanda = new RwandaDataVerification(config);
  }
}

export default PremblyDataVerification;
