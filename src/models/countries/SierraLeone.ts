import postRequest from "../../utils/postRequest";
import { Config } from "../../types";

class SierraLeoneDataVerification {
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
    Verifies Sierra Leone Voter's card using state, last name and card number.
    @async
    @param {string} state - The state where the voter registered.
    @param {string} last_name - The last name of the voter.
    @param {string} number - The voter's card number.
    @returns {Promise<Object>} An object representing the verification response.
  */
  verifySierraLeoneVotersCard = async (
    state: string,
    last_name: string,
    number: string
  ) => {
    const verification_data = { state, last_name, number };
    const endpoint = "sl/voters";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verifies Sierra Leone Driver's License using first name, last name, date of birth and license number.
    @async
    @param {string} first_name - The first name of the driver.
    @param {string} last_name - The last name of the driver.
    @param {string} dob - The driver's date of birth in yyyy-mm-dd format.
    @param {string} number - The driver's license number.
    @returns {Promise<Object>} An object representing the verification response.
  */
  verifySierraLeoneDriversLicense = async (
    first_name: string,
    last_name: string,
    dob: string,
    number: string
  ) => {
    const verification_data = { first_name, last_name, dob, number };
    const endpoint = "sl/drivers_license";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default SierraLeoneDataVerification;
