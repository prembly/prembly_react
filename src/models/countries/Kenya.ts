import postRequest from "../../utils/postRequest";
import { Config } from "../../types";

class KenyaDataVerification {
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
    Verify Kenya national ID information.
    @async
    @param {string} firstname - The first name of user.
    @param {string} lastname - The last name of user.
    @param {string} nationalid - The national ID number of user.
    @param {string} dob - The date of birth of user in YYYY-MM-DD format.
    @returns {Promise<Object>} The response object containing the verification result.
    * @throws {Error} If the request fails or the response is not valid.
  */
  verifyKenyaNationalId = async (
    firstname: string,
    lastname: string,
    nationalid: string,
    dob: string
  ) => {
    const verification_data = { firstname, lastname, nationalid, dob };
    const endpoint = "ke/national_id";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verify Kenya national ID information with a new number.
    @async
    @param {string} number - The new national ID number of the person.
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The reference number of the customer.
    @returns {Promise<Object>} The response object containing the verification result.
    * @throws {Error} If the request fails or the response is not valid.
  */
  verifyKenyaNationalIdentityNumber = async (
    number: string,
    customer_name: string,
    customer_reference: string
  ) => {
    const verification_data = { number, customer_name, customer_reference };
    const endpoint = "ke/national_id/new";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verify Kenya international passport information.
    @async
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The last name of user.
    @param {string} number - The passport number of the person.
    @returns {Promise<Object>} The response object containing the verification result.
    * @throws {Error} If the request fails or the response is not valid.
  */
  verifyKenyaInternationalPassport = async (
    customer_name: string,
    customer_reference: string,
    number: string
  ) => {
    const verification_data = { number, customer_name, customer_reference };
    const endpoint = "ke/passport";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verify Kenya driver's license information.
    @async
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The lastname of user.
    @param {string} number - The driver's license number of the user in YYYY-MM-DD format.
    @returns {Promise<Object>} The response object containing the verification result.
    * @throws {Error} If the request fails or the response is not valid.
  */
  verifyKenyaDriversLicense = async (
    customer_name: string,
    customer_reference: string,
    number: string
  ) => {
    const verification_data = { number, customer_name, customer_reference };
    const endpoint = "ke/drivers_license";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default KenyaDataVerification;
