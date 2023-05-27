import postRequest from "../../utils/postRequest";
import { Config } from "../../types";

class NigeriaDataVerification {
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
   * Sends a request to verify a vehicle number using Prembly's identitypass API.
   * @async
   * @param {string} vehicle_number - The vehicle number to verify.
   * @returns {Promise<any>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyPlateNumber = async (vehicle_number: string) => {
    const verification_data = { vehicle_number };
    const endpoint = "vehicle";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verify stamp duty using Prembly's identitypass API.
    @async
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The reference of the customer.
    @param {string} number - The number to verify.
    @returns {Promise<any>} A Promise that resolves to verification result.
    @throws {Error} If the API request fails or returns an error.
  */
  verifyStampDuty = async (
    customer_name: string,
    customer_reference: string,
    number: string
  ) => {
    const verification_data = { customer_name, customer_reference, number };
    const endpoint = "stamp_duty";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
   * Sends a request to verify a Bank Verification Number (BVN) using Prembly's identitypass API.
   * @async
   * @param {string} number - The BVN to verify.
   * @returns {Promise<any>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyBVN = async (number: string) => {
    const verification_data = { number };
    const endpoint = "bvn";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
   * Verifies the NIN slip image.
   * @async
   * @param {string} image - The NIN slip image in either PNG or JPG format. It can also be a base64 encoded string.
   * @returns {Promise<any>} - A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyNINSlip = async (image: string) => {
    const verification_data = { image };
    const endpoint = "nin/image";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
   * verify a Virtual NIN (vNIN).
   * @async
   * @param {string} number - The Virtual NIN to verify.
   * @param {string} nin_number - The Raw NIN.
   * @returns {Promise<any>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyVNIN = async (number: string, nin_number: string) => {
    const verification_data = { number, nin_number };
    const endpoint = "nin_wo_face";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
   * verify a Tax Identification Number (TIN).
   * @async
   * @param {string} number - TIN or RC number or Phone number
   * @param {string} channel - TIN,CAC or Phone - (Default: TIN).
   * @returns {Promise<any>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyTaxIdentificationNumber = async (number: string, channel: string) => {
    const verification_data = { number, channel };
    const endpoint = "tin";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
   * Verifies a company's details using their CAC (Corporate Affairs Commission) number.
   * @async
   * @param {string} company_name - The name of the company to be verified.
   * @param {string} rc_number - The RC (Registration of Company) number of the company to be verified.
   * @param {string} company_type - BN or RC or IT or LL or LLP. Default is RC.
   * @returns {Promise<Object>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyCAC = async (
    company_name: string,
    rc_number: string,
    company_type: string
  ) => {
    const verification_data = { company_name, rc_number, company_type };
    const endpoint = "cac/advance";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verifies a bank account number using Prembly's identitypass API.
    @async
    @param {string} number - The bank account number to verify.
    @param {string} bank_code - The code for the bank associated with the account.
    @returns {Promise<any>} A Promise that resolves to the verification result.
    @throws {Error} If the API request fails or returns an error.
  */
  verifyAccountNumber = async (number: string, bank_code: string) => {
    const verification_data = { number, bank_code };
    const endpoint = "bank_account/advance";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
   * Verifies a voter's card using Prembly's identitypass API.
   * @async
   * @param {string} state - The state where the voter is registered.
   * @param {string} last_name - The voter's last name.
   * @param {string} number - The voter's card number(957F5AD45AJ67890).
   * @returns {Promise<any>} A Promise that resolves to verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyVotersCard = async (
    state: string,
    last_name: string,
    number: string
  ) => {
    const verification_data = { state, last_name, number };
    const endpoint = "voters_card";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verify driver's license information using Prembly's identitypass API.
    @async
    @param {string} first_name - The first name of the driver.
    @param {string} last_name - The last name of the driver.
    @param {string} dob - The date of birth of the driver in the format YYYY-MM-DD(1998-06-19 - Format).
    @param {string} number - The driver's license number.
    @returns {Promise} A Promise that resolves to the verification result.
    @throws {Error} If the API request fails or returns an error.
  */
  verifyDriversLicense = async (
    first_name: string,
    last_name: string,
    dob: string,
    number: string
  ) => {
    const verification_data = { first_name, last_name, dob, number };
    const endpoint = "drivers_license/advance";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Verify international passport using Prembly's identitypass API.
    @async
    @param {string} number - The passport number to verify
    @param {string} last_name - The last name of the passport holder
    @returns {Promise} A promise that resolves with the verification result
    @throws {Error} If the API request fails or returns an error.
  */
  verifyInternationalPassport = async (number: string, last_name: string) => {
    const verification_data = { number, last_name };
    const endpoint = "national_passport";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
   * Retrieves credit bureau data for a person by their phone number and first name.
   * Get Credit bureau statement.
   * @async
   * @param {string} phone_number The person's phone number.
   * @param {string} first_name The person's first name.
   * @returns {Promise<any>} A Promise that resolves to verification result.
   * @throws {Error} If there is an error with the verification request.
   */
  getCreditBureau = async (phone_number: string, first_name: string) => {
    const verification_data = { phone_number, first_name };
    const endpoint = "credit_bureau";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    Retrieves credit bureau information for a business customer based on their name and RC number.
    @param {string} rc_number - The RC number of the customer's company.
    @param {string} customer_name - The name of the customer's business.
    @param {string} customer_reference - The unique customer reference/
    @returns {Promise<any>} - A Promise that resolves to the credit bureau information of the business customer.
  */
  getBusinessCreditBureau = (
    rc_number: string,
    customer_name: string,
    customer_reference: string
  ) => {
    const verification_data = { rc_number, customer_name, customer_reference };
    const endpoint = "credit_bureau/commercial/advance";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
   * Gets a consumer credit report from the credit bureau.
   * @param {string} mode - The mode of the credit report request either ID or BIO
   * @param {string} number - If mode is ID(Should be a BVN).
   * @param {string} dob - The customer's date of birth if mode is BIO(Date of Birth).
   * @param {string} customer_name - The customer's name.
   * @param {string} customer_reference - unique customer reference.
   * @returns {Promise<Object>} A Promise that resolves to verification result.
   * @throws {Error} If the request fails or the response is not valid.
   */
  getConsumerCreditBureau = (
    mode: string,
    number: string,
    dob: string,
    customer_name: string,
    customer_reference: string
  ) => {
    const verification_data = {
      mode,
      number,
      dob,
      customer_name,
      customer_reference,
    };

    const endpoint = "credit_bureau/consumer/advance";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default NigeriaDataVerification;
