import postRequest from "../../utils/postRequest";
import { Config } from "../../types";

class UgandaDataVerification {
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
    Verify Uganda company information.
    @async
    @param {string} customer_name - 	Your customer name.
    @param {string} customer_reference - The reference number of the customer.
    @param {string} reservation_number - The company reservation number.
    @returns {Promise<Object>} The response object containing the verification result.
  */
  verifyUgandaBusiness = async (
    customer_reference: string,
    customer_name: string,
    reservation_number: string
  ) => {
    const verification_data = {
      customer_reference,
      customer_name,
      reservation_number,
    };
    const endpoint = "ug/company";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default UgandaDataVerification;
