import apiRequest from "../utils";

class PremblyGlobalBusinessVerification {
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

  verifyCompanyWithName = async (
    company_name: string,
    country_code: string
  ) => {
    const verification_data = { company_name, country_code };
    const endpoint = "global/company/search";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyCompanyWithRegistrationNumber = async (
    customer_reference: string,
    customer_name: string,
    country_code: string,
    company_number: string
  ) => {
    const verification_data = {
      customer_reference,
      customer_name,
      country_code,
      company_number,
    };
    const endpoint = "global/company";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default PremblyGlobalBusinessVerification;
