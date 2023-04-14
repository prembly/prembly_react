import apiRequest from "../utils";

class PremblyGeneralVerification {
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

  emailVerification = async (email: string) => {
    const verification_data = { email };
    const endpoint = "emailage";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  cardBINVerification = async (number: string) => {
    const verification_data = { number };
    const endpoint = "card_bin";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  vehicleVerification = async (vin: string) => {
    const verification_data = { vin };
    const endpoint = "vehicle/vin";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default PremblyGeneralVerification;
