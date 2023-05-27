import postRequest from "../../utils/postRequest";
import { Config } from "../../types";

class SouthAfricaDataVerification {
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
    Verify South Africa national identity.
    @async
    @param {string} firstname - 	The first name of the customer.
    @param {string} lastname - The first name of the customer.
    @param {string} nationalid- The nationalid of the customer.
    @param {string} dob The dob of the customer
    @returns {Promise<Object>} The response object containing the verification result.
  */
  verifySouthAfricaNationalIdentity = async (
    firstname: string,
    lastname: string,
    nationalid: string,
    dob: string
  ) => {
    const verification_data = { firstname, lastname, nationalid, dob };
    const endpoint = "sa/national_id";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verify South Africa business information.
    @async
    @param {string} customer_reference - The reference number of the customer.
    @param {string} customer_name - 	Your customer name.
    @param {string} reg_number - The company reg number.
    @returns {Promise<Object>} The response object containing the verification result.
  */
  verifySouthAfricaBusiness = async (
    customer_reference: string,
    customer_name: string,
    reg_number: string
  ) => {
    const verification_data = {
      customer_reference,
      customer_name,
      reg_number,
    };
    const endpoint = "sa/company";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default SouthAfricaDataVerification;
