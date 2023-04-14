// Type definitions for PremblyPass Software Development Kit
// Project: https://github.com/Danztee/prembly-pass
// Definitions by: Olowoniyi Daniel <https://github.com/Danztee>

export class PremblyDataVerification {
  /**
   * The `PremblyDataVerification` class provides methods for verifying various types of data using Prembly's identitypass API.
   * @class
   * @param {string} x_api_key - The API key to use for authentication.
   * @param {string} app_id - The app ID to use for authentication.
   */
  constructor(x_api_key: string, app_id: string);

  // DATA VERIFICATION
  // NIGERIA DATA VERIFICATION
  /**
   * Sends a request to verify a vehicle number using Prembly's identitypass API.
   * @async
   * @param {string} vehicle_number - The vehicle number to verify.
   * @returns {Promise<any>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyPlateNumber(vehicle_number: string): Promise<any>;

  /**
      Verify stamp duty using Prembly's identitypass API.
      @async
      @param {string} customer_name - The name of the customer.
      @param {string} customer_reference - The reference of the customer.
      @param {string} number - The number to verify.
      @returns {Promise<any>} A Promise that resolves to verification result.
      @throws {Error} If the API request fails or returns an error.
    */
  verifyStampDuty(
    customer_name: string,
    customer_reference: string,
    number: string
  ): Promise<any>;

  /**
   * Sends a request to verify a Bank Verification Number (BVN) using Prembly's identitypass API.
   * @async
   * @param {string} number - The BVN to verify.
   * @returns {Promise<any>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyBVN(number: string): Promise<any>;

  /**
   * Verifies the NIN slip image.
   * @async
   * @param {string} image - The NIN slip image in either PNG or JPG format. It can also be a base64 encoded string.
   * @returns {Promise<any>} - A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyNINSlip(image: string): Promise<any>;

  /**
   * verify a Virtual NIN (vNIN).
   * @async
   * @param {string} number - The Virtual NIN to verify.
   * @param {string} nin_number - The Raw NIN.
   * @returns {Promise<any>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyVNIN(number: string, nin_number: string): Promise<any>;

  /**
   * verify a Tax Identification Number (TIN).
   * @async
   * @param {string} number - TIN or RC number or Phone number
   * @param {string} channel - TIN,CAC or Phone - (Default: TIN).
   * @returns {Promise<any>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyTaxIdentificationNumber(number: string, channel: string): Promise<any>;

  /**
   * Verifies a company's details using their CAC (Corporate Affairs Commission) number.
   * @async
   * @param {string} company_name - The name of the company to be verified.
   * @param {string} rc_number - The RC (Registration of Company) number of the company to be verified.
   * @param {string} company_type - BN or RC or IT or LL or LLP. Default is RC.
   * @returns {Promise<Object>} A Promise that resolves to the verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyCAC(
    company_name: string,
    rc_number: string,
    company_type: string
  ): Promise<any>;

  /**
      Verifies a bank account number using Prembly's identitypass API.
      @async
      @param {string} number - The bank account number to verify.
      @param {string} bank_code - The code for the bank associated with the account.
      @returns {Promise<any>} A Promise that resolves to the verification result.
      @throws {Error} If the API request fails or returns an error.
    */
  verifyAccountNumber(number: string, bank_code: string): Promise<any>;

  /**
   * Verifies a voter's card using Prembly's identitypass API.
   * @async
   * @param {string} state - The state where the voter is registered.
   * @param {string} last_name - The voter's last name.
   * @param {string} number - The voter's card number(957F5AD45AJ67890).
   * @returns {Promise<any>} A Promise that resolves to verification result.
   * @throws {Error} If the API request fails or returns an error.
   */
  verifyVotersCard(
    state: string,
    last_name: string,
    number: string
  ): Promise<any>;

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
  verifyDriversLicense(
    first_name: string,
    last_name: string,
    dob: string,
    number: string
  ): Promise<any>;

  /**
      Verify international passport using Prembly's identitypass API.
      @async
      @param {string} number - The passport number to verify
      @param {string} last_name - The last name of the passport holder
      @returns {Promise} A promise that resolves with the verification result
      @throws {Error} If the API request fails or returns an error.
      */
  verifyInternationalPassport(number: string, last_name: string): Promise<any>;

  /**
   * Retrieves credit bureau data for a person by their phone number and first name.
   * Get Credit bureau statement.
   * @async
   * @param {string} phone_number The person's phone number.
   * @param {string} first_name The person's first name.
   * @returns {Promise<any>} A Promise that resolves to verification result.
   * @throws {Error} If there is an error with the verification request.
   */
  getCreditBureau(phone_number: string, first_name: string): Promise<any>;

  /**
      Retrieves credit bureau information for a business customer based on their name and RC number.
      @param {string} rc_number - The RC number of the customer's company.
      @param {string} customer_name - The name of the customer's business.
      @param {string} customer_reference - The unique customer reference/
      @returns {Promise<any>} - A Promise that resolves to the credit bureau information of the business customer.
    */
  getBusinessCreditBureau(
    rc_number: string,
    customer_name: string,
    customer_reference: string
  ): Promise<any>;

  /**
   * Gets a consumer credit report from the credit bureau.
   *
   * @param {string} mode - The mode of the credit report request either ID or BIO
   * @param {string} number - If mode is ID(Should be a BVN).
   * @param {string} dob - The customer's date of birth if mode is BIO(Date of Birth).
   * @param {string} customer_name - The customer's name.
   * @param {string} customer_reference - unique customer reference.
   * @returns {Promise<Object>} A Promise that resolves to verification result.
   * @throws {Error} If the request fails or the response is not valid.
   */
  getConsumerCreditBureau(
    mode: string,
    number: string,
    dob: string,
    customer_name: string,
    customer_reference: string
  ): Promise<any>;

  // KENYA DATA VERIFICATION
  /**
    Verify Kenya national ID information.
    @async
    @param {string} firstname - The first name of user.
    @param {string} lastname - The last name of user.
    @param {string} nationalid - The national ID number of user.
    @param {string} dob - The date of birth of user in YYYY-MM-DD format.
    @returns {Promise<Object>} The response object containing the verification result.
    * @throws {Error} If the request fails or the response is not valid.
    */
  verifyKenyaNationalId(
    firstname: string,
    lastname: string,
    nationalid: string,
    dob: string
  ): Promise<any>;

  /**
    Verify Kenya national ID information with a new number.
    @async
    @param {string} number - The new national ID number of the person.
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The reference number of the customer.
    @returns {Promise<Object>} The response object containing the verification result.
    * @throws {Error} If the request fails or the response is not valid.
    */
  verifyKenyaNationalIdentityNumber(
    number: string,
    customer_name: string,
    customer_reference: string
  ): Promise<any>;

  /**
    Verify Kenya international passport information.
    @async
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The last name of user.
    @param {string} number - The passport number of the person.
    @returns {Promise<Object>} The response object containing the verification result.
    * @throws {Error} If the request fails or the response is not valid.
    */
  verifyKenyaInternationalPassport(
    number: string,
    customer_name: string,
    customer_reference: string
  ): Promise<any>;

  /**
    Verify Kenya driver's license information.
    @async
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The lastname of user.
    @param {string} number - The driver's license number of the user in YYYY-MM-DD format.
    @returns {Promise<Object>} The response object containing the verification result.
    * @throws {Error} If the request fails or the response is not valid.
    */
  verifyKenyaDriversLicense(
    customer_name: string,
    customer_reference: string,
    number: string
  ): Promise<any>;

  // GHANA DATA VERIFICATION
  /**
    Verify Ghana international passport information.
    @async
    @param {string} number - The passport number of the person.
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifyGhanaInternationalPassport(number: string): Promise<any>;
  /**
    
    Verify Ghana driver's license information.
    @async
    @param {string} number - The driver's license number of the person.
    @param {string} dob - The date of birth of the person in YYYY-MM-DD format.
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifyGhanaDriversLicense(number: string, dob: string): Promise<any>;
  /**
    
    Verify Ghana Social Security and National Insurance Trust number.
    @async
    @param {string} number - The SSNIT number of the person.
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifyGhanaSSNIT(number: string): Promise<any>;
  /**
    
    Verify Ghana voter's card information.
    @async
    @param {string} type - The type of voter's card: MAIN or OLD.
    @param {string} number - The voter's card number of the person.
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifyGhanaVotersCard(type: string, number: string): Promise<any>;

  // UGANDA DATA VERIFICATION
  /**
    Verify Uganda company information.
    @async
    @param {string} customer_name - 	Your customer name.
    @param {string} customer_reference - The reference number of the customer.
    @param {string} reservation_number - The company reservation number.
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifyUgandaBusiness(
    customer_reference: string,
    customer_name: string,
    reservation_number: string
  ): Promise<any>;

  // SOUTH AFRICA DATA VERIFICATION
  /**
    Verify South Africa national identity.
    @async
    @param {string} firstname - 	The first name of the customer.
    @param {string} lastname - The first name of the customer.
    @param {string} nationalid- The nationalid of the customer.
    @param {string} dob The dob of the customer
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifySouthAfricaNationalIdentity(
    firstname: string,
    lastname: string,
    nationalid: string,
    dob: string
  ): Promise<any>;

  /**
    Verify South Africa business information.
    @async
    @param {string} customer_reference - The reference number of the customer.
    @param {string} customer_name - 	Your customer name.
    @param {string} reg_number - The company reg number.
    @returns {Promise<Object>} The response object containing the verification result.
    */
  verifySouthAfricaBusiness(
    customer_reference: string,
    customer_name: string,
    reg_number: string
  ): Promise<any>;

  // SIERRA LONE DATA VERIFICATION
  /**
    Verifies Sierra Leone Voter's card using state, last name and card number.
    @async
    @param {string} state - The state where the voter registered.
    @param {string} last_name - The last name of the voter.
    @param {string} number - The voter's card number.
    @returns {Promise<Object>} An object representing the verification response.
    */
  verifySierraLoneVotersCard(
    state: string,
    last_name: string,
    number: string
  ): Promise<any>;

  /**
    Verifies Sierra Leone Driver's License using first name, last name, date of birth and license number.
    @async
    @param {string} first_name - The first name of the driver.
    @param {string} last_name - The last name of the driver.
    @param {string} dob - The driver's date of birth in yyyy-mm-dd format.
    @param {string} number - The driver's license number.
    @returns {Promise<Object>} An object representing the verification response.
    */
  verifySierraLoneDriversLicense(
    first_name: string,
    last_name: string,
    dob: string,
    number: string
  ): Promise<any>;
}

export class PremblyGeneralVerification {
  /**
   * The `PremblyGeneralVerification` class provides methods for verifying various types of data using Prembly's identitypass API.
   * @class
   * @param {string} x_api_key - The API key to use for authentication.
   * @param {string} app_id - The app ID to use for authentication.
   */
  constructor(x_api_key: string, app_id: string);

  /**
    This API endpoint helps you check whether an email address is valid or not.
    @async
    @param {string} email - The email to verify.
    @returns {Promise<Object>} An object representing the verification response.
    */
  emailVerification(email: string): Promise<Object>;

  /**
    This API enables developers to verify the first six digits of a credit or debit card number known as the Bank Identification Number (BIN).
    @async
    @param {string} number - The Bank Identification number to verify.
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
    */
  cardBINVerification(number: string): Promise<Object>;

  /**
    This API allows you to verify a Vehicle Identification Number (VIN) for a car. A VIN is a unique 17-digit code that is used to identify a specific car. By sending a POST request to the API endpoint with the VIN as a parameter, you will receive a JSON response that contains various details about the car.
    @async
    @param {string} vin - The VIN of the vehicle to verify.
    @returns {Promise<Object>} An object representing the verification response.
    @throws {Error} If an error occurs during the verification process.
    */
  vehicleVerification(vin: string): Promise<Object>;
}

export class PremblyGlobalBusinessVerification {
  /**
   * The `PremblyGlobalBusinessVerification` class provides methods for verifying various types of business using Prembly's identitypass API.
   * @class
   * @param {string} x_api_key - The API key to use for authentication.
   * @param {string} app_id - The app ID to use for authentication.
   */
  constructor(x_api_key: string, app_id: string);

  /**
    This API allows you to search for a company by providing its name and country code. The country code is in strict compliance with the ISO-3166-1 Alpha-2 Standards
    @async
    @param {string} company_name - The name of the company to verify.
    @param {string} country_code - The two-letter country code of the country where the company is located.
    @returns {Promise<Object>} An object representing the verification response.
    */
  verifyCompanyWithName(
    company_name: string,
    country_code: string
  ): Promise<Object>;

  /**
    * This API provides a way to verify company registration information using biometrics.
    @async
    @param {string} company_number - The registration number of the company to verify.
    @param {string} country_code - The two-letter country code of the country where the company is located.
    @param {string} customer_name - The name of the customer.
    @param {string} customer_reference - The customer reference number.
  
    @returns {Promise<Object>} An object representing the verification response.
     */

  verifyCompanyWithRegistrationNumber(
    company_number: string,
    country_code: string,
    customer_name: string,
    customer_reference: string
  ): Promise<Object>;
}

export class PremblyDocumentVerification {
  /**
   * The `PremblyGlobalBusinessVerification` class provides methods for verifying various types of document using Prembly's identitypass API.
   * @class
   * @param {string} x_api_key - The API key to use for authentication.
   * @param {string} app_id - The app ID to use for authentication.
   */
  constructor(x_api_key: string, app_id: string);

  /**
  This API allows you to search for a company by providing its name and country code. The country code is in strict compliance with the ISO-3166-1 Alpha-2 Standards
  @async
  @param {string} doc_type - The type of the document to verify.
  @param {string} doc_country - The country of the document.
    @param {string} doc_image - The image of the document to verify.
  @returns {Promise<Object>} An object representing the verification response.
  */
  documentVerification(
    doc_type: string,
    doc_country: string,
    doc_image: string
  ): Promise<Object>;
}

////////////////////////////////////////////////////////////
/**
 * Makes an API request with the given verification data.
 * @param endpoint The API endpoint to send the request to.
 * @param verification_data The data to send as the request body.
 * @param x_api_key The API key to use for authentication.
 * @param app_id The ID of the app making the request.
 * @returns A Promise that resolves to the response data.
 */
declare function apiRequest(
  endpoint: string,
  verification_data: Record<string, string>,
  x_api_key: string,
  app_id: string
): Promise<any>;
