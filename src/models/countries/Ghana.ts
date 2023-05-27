import postRequest from "../../utils/postRequest";
import { Config } from "../../types";

class GhanaDataVerification {
  #x_api_key = "";
  #app_id = "";
  #environment = "test";

  constructor(config: Config) {
    this.#x_api_key = config.x_api_key;
    this.#app_id = config.app_id;
    this.#environment = config.environment;
  }

  #sendRequest = async (
    endpoint: string,
    verification_data: Record<string, string>
  ) => {
    return await postRequest(
      endpoint,
      verification_data,
      this.#x_api_key,
      this.#app_id,
      this.#environment
    );
  };

  /**
    Verify Ghana international passport information.
    @async
    @param {string} number - The passport number of the person.
    @returns {Promise<Object>} The response object containing the verification result.
  */
  verifyGhanaInternationalPassport = async (number: string) => {
    const verification_data = { number };
    const endpoint = "gh/passport";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**    
    Verify Ghana driver's license information.
    @async
    @param {string} number - The driver's license number of the person.
    @param {string} dob - The date of birth of the person in YYYY-MM-DD format.
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifyGhanaDriversLicense = async (number: string, dob: string) => {
    const verification_data = { number, dob };
    const endpoint = "gh/drivers_license";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**   
    Verify Ghana Social Security and National Insurance Trust number.
    @async
    @param {string} number - The SSNIT number of the person.
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifyGhanaSSNIT = async (number: string) => {
    const verification_data = { number };
    const endpoint = "gh/ssnit";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**      
    Verify Ghana voter's card information.
    @async
    @param {string} type - The type of voter's card: MAIN or OLD.
    @param {string} number - The voter's card number of the person.
    @returns {Promise<Object>} The response object containing the verification result.
  */
  verifyGhanaVotersCard = async (type: string, number: string) => {
    const verification_data = { type, number };
    const endpoint = "gh/voters";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default GhanaDataVerification;
