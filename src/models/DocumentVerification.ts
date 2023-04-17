import apiRequest from "../utils";

class PremblyDocumentVerification {
  #x_api_key: string = "";
  #app_id: string = "";

  constructor(x_api_key: string, app_id: string) {
    this.#x_api_key = x_api_key;
    this.#app_id = app_id;
  }

  #sendRequest = async (endpoint: string, verification_data: any) => {
    return await apiRequest(
      endpoint,
      verification_data,
      this.#x_api_key,
      this.#app_id
    );
  };

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
