import postRequest from "../utils/postRequest";
import { Config } from "../types";

class PremblyGlobalBusinessVerification {
  #x_api_key = "";
  #app_id = "";
  #environment = "test";

  /**
   * The `PremblyGlobalBusinessVerification` class provides methods for verifying various types of business using Prembly's identitypass API.
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
    This API allows you to search for a company by providing its name and country code. The country code is in strict compliance with the ISO-3166-1 Alpha-2 Standards
    @async
    @param {string} company_name - The name of the company to verify.
    @param {string} country_code - The two-letter country code of the country where the company is located.
    @returns {Promise<Object>} An object representing the verification response.
  */
  companySearchWithName = async (
    company_name: string,
    country_code: string
  ) => {
    const verification_data = { company_name, country_code };
    const endpoint = "global/company/search";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    * This API provides a way to verify company registration information using biometrics.
    @async
    @param {string} company_number - The registration number of the company to verify.
    @param {string} country_code - The two-letter country code of the country where the company is located.
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The customer reference number.
    @returns {Promise<Object>} An object representing the verification response.
   */
  companySearchWithRegistrationNumber = async (
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

  /**
    * This API endpoint allows you to search for companies using their email address.
    @async
    @param {string} email - The query.
    @returns {Promise<Object>} An object representing the verification response.
  */
  companySearchWithEmail = async (email: string) => {
    const verification_data = { email };
    const endpoint = "global/company/search_with_email";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    * This API allows you to search for a company based on the company name, customer name, and customer reference.
    @async
    @param {string} query - The query.
    @param {string} customer_name - [OPTIONAL] Your customer's name
    @param {string} customer_reference - [OPTIONAL] Unique customer reference
    @returns {Promise<Object>} An object representing the verification response.
  */
  companySearchWithStrings = async (
    query: string,
    customer_name?: string,
    customer_reference?: string
  ) => {
    const verification_data: Record<string, string> = {
      query,
      ...(customer_name !== undefined && { customer_name }),
      ...(customer_reference !== undefined && { customer_reference }),
    };

    const endpoint = "global/company/search_with_string";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default PremblyGlobalBusinessVerification;
