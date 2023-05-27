import getRequest from "../utils/getRequest";
import postRequest from "../utils/postRequest";
import { Config } from "../types";

class PremblyGeneralVerification {
  #x_api_key = "";
  #app_id = "";
  #environment = "test";

  /**
   * The `PremblyGeneralVerification` class provides methods for verifying various types of business using Prembly's identitypass API.
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
    verification_data: Record<string, string>,
    url?: string
  ) => {
    return await postRequest(
      endpoint,
      verification_data,
      this.#x_api_key,
      this.#app_id,
      this.#environment,
      url
    );
  };

  /**
    This API endpoint helps you check whether an email address is valid or not.
    @async
    @param {string} email - The email to verify.
    @returns {Promise<Object>} An object representing the verification response.
  */
  emailVerification = async (email: string) => {
    const verification_data = { email };
    const endpoint = "emailage";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    This API enables developers to verify the first six digits of a credit or debit card number known as the Bank Identification Number (BIN).
    @async
    @param {string} number - The Bank Identification number to verify.
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
  */
  cardBINVerification = async (number: string) => {
    const verification_data = { number };
    const endpoint = "card_bin";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    This API allows you to verify a Vehicle Identification Number (VIN) for a car. A VIN is a unique 17-digit code that is used to identify a specific car. By sending a POST request to the API endpoint with the VIN as a parameter, you will receive a JSON response that contains various details about the car.
    @async
    @param {string} vin - The VIN of the vehicle to verify.
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
  */
  vehicleVerification = async (vin: string) => {
    const verification_data = { vin };
    const endpoint = "vehicle/vin";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  /**
    The Interpol Ban List is a service that helps merchants search for individuals who have been banned by Interpol.
    @async
    @param {string} search_mode - IMAGE or NAME.
    @param {string} name - Name.
    @param {string} image - base64 image.
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
  */
  interpolBanList = async (
    search_mode: "NAME" | "IMAGE",
    name?: string,
    image?: string
  ) => {
    const verification_data: Record<string, string> = {
      search_mode,
      ...(name !== undefined && { name }),
      ...(image !== undefined && { image }),
    };
    const endpoint = "ban_list/search";
    const url = "api/v2/biometrics/merchant/data/";
    const response = this.#sendRequest(endpoint, verification_data, url);
    return response;
  };

  /**
    This API allows you to get bank codes.
    @async
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
  */
  getBankCodes = async () => {
    const endpoint = "verification/bank_code";
    const response = getRequest(
      endpoint,
      this.#x_api_key,
      this.#app_id,
      this.#environment
    );
    return response;
  };

  /**
    This endpoint allows merchants to retrieve the current balance of their wallet in a particular payment system. This endpoint is typically used in financial systems to enable merchants to monitor their funds and manage their transactions.
    @async
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
  */
  getWalletBalance = async () => {
    const endpoint = "wallet/balance";
    const response = getRequest(
      endpoint,
      this.#x_api_key,
      this.#app_id,
      this.#environment
    );
    return response;
  };

  /**
    This endpoint can be used to retrieve the verification status of a particular API log reference. The endpoint would take the API log reference as an input and return the verification status of the log, indicating whether the log is authentic or not.
    @async
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
  */
  getVerificationStatus = async () => {
    const endpoint = "verification/status";
    const response = getRequest(
      endpoint,
      this.#x_api_key,
      this.#app_id,
      this.#environment
    );
    return response;
  };

  /**
    This endpoint can be used to retrieve the all available verification and country endpoints.
    @async
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
  */
  getAllVerificationEndpoints = async () => {
    const urlPath = "api/v2/biometrics/api/";
    const endpoint = "endpoint/get";
    const response = getRequest(
      endpoint,
      this.#x_api_key,
      this.#app_id,
      this.#environment,
      urlPath
    );
    return response;
  };
}

export default PremblyGeneralVerification;
