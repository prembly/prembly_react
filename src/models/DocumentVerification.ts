import postRequest from "../utils/postRequest";
import { Config } from "../types";

class PremblyDocumentVerification {
  #x_api_key = "";
  #app_id = "";
  #environment = "test";

  /**
   * The `PremblyDocumentVerification` class provides methods for verifying various types of document using Prembly's identitypass API.
   * @class
   * @param {Config} config - The configuration object.
   */
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
    Using an API to verify a document image is a simple and efficient way to automate document verification process. You can verify documents across Asia-Pacific (APAC), Europe, Middle East, and Africa (EMEA), North America (NA) and South America (SA) regions. By following the steps outlined in this guide, you can easily incorporate document verification into your own software applications.
    @async
    @param {string} doc_type - The type of the document to verify.
    @param {string} doc_country - The country of the document.
    @param {string} doc_image - The image of the document to verify.
    @returns {Promise<Object>} An object representing the verification response.
  */
  documentVerification = async (
    doc_type: string,
    doc_country: string,
    doc_image: string
  ) => {
    const verification_data = { doc_type, doc_country, doc_image };
    const endpoint = "document";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default PremblyDocumentVerification;
