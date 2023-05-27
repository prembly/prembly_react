import postRequest from "../../utils/postRequest";
import { Config } from "../../types";

class RwandaDataVerification {
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
    This endpoint is used to authenticate the national identity cards issued to citizens of Rwanda.
    @async
    @param {string} number - 	Your national id.
    @returns {Promise<Object>} The response object containing the verification result.
  */
  verifyRwandaNID = async (number: string) => {
    const verification_data = { number };
    const endpoint = "rwanda/nid";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    This endpoint allows verification of the authenticity of Rwandan passports.
    @async
    @param {string} number - 	Your passport number.
    @returns {Promise<Object>} The response object containing the verification result.
  */
  verifyRwandaPassport = async (number: string) => {
    const verification_data = { number };
    const endpoint = "rwanda/passport";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default RwandaDataVerification;
