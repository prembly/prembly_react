import apiRequest from "../utils";

class PremblyDataVerification {
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

  // NIGERIA DATA VERIFICATION
  verifyPlateNumber = async (vehicle_number: string) => {
    const verification_data = { vehicle_number };
    const endpoint = "vehicle";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

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

  verifyBVN = async (number: string) => {
    const verification_data = { number };
    const endpoint = "bvn";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyNINSlip = async (image: string) => {
    const verification_data = { image };
    const endpoint = "nin/image";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyVNIN = async (number: string, nin_number: string) => {
    const verification_data = { number, nin_number };
    const endpoint = "nin_wo_face";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyTaxIdentificationNumber = async (number: string, channel: string) => {
    const verification_data = { number, channel };
    const endpoint = "tin";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

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

  verifyAccountNumber = async (number: string, bank_code: string) => {
    const verification_data = { number, bank_code };
    const endpoint = "bank_account/advance";
    const response = await apiRequest(
      endpoint,
      verification_data,
      this.#x_api_key,
      this.#app_id
    );
    return response;
  };

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

  verifyInternationalPassport = async (number: string, last_name: string) => {
    const verification_data = { number, last_name };
    const endpoint = "national_passport";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  getCreditBureau = async (phone_number: string, first_name: string) => {
    const verification_data = { phone_number, first_name };
    const endpoint = "credit_bureau";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

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

  getConsumerCreditBureau = (
    mode: string,
    number: string,
    dob: string,
    customer_name: string,
    customer_reference: string
  ) => {
    let verification_data = {
      mode,
      number,
      dob,
      customer_name,
      customer_reference,
    };

    // if (mode === "ID") {
    //   console.log(mode);
    //   verification_data = {
    //     mode,
    //     customer_name,
    //     customer_reference,
    //     number: number_dob,
    //   };
    // }
    // if (mode == "BIO") {
    //   console.log(mode);
    //   verification_data = {
    //     mode,
    //     customer_name,
    //     customer_reference,
    //     dob: number_dob,
    //   };
    // }

    const endpoint = "credit_bureau/consumer/advance";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  // KENYA DATA VERIFICATION
  verifyKenyaNationalId = async (
    firstname: string,
    lastname: string,
    nationalid: string,
    dob: string
  ) => {
    const verification_data = { firstname, lastname, nationalid, dob };
    const endpoint = "ke/national_id";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyKenyaNationalIdentityNumber = async (
    number: string,
    customer_name: string,
    customer_reference: string
  ) => {
    const verification_data = { number, customer_name, customer_reference };
    const endpoint = "ke/national_id/new";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyKenyaInternationalPassport = async (
    customer_name: string,
    customer_reference: string,
    number: string
  ) => {
    const verification_data = { number, customer_name, customer_reference };
    const endpoint = "ke/passport";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyKenyaDriversLicense = async (
    customer_name: string,
    customer_reference: string,
    number: string
  ) => {
    const verification_data = { number, customer_name, customer_reference };
    const endpoint = "ke/drivers_license";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  // GHANA DATA VERIFICATION
  verifyGhanaInternationalPassport = async (number: string) => {
    const verification_data = { number };
    const endpoint = "gh/passport";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyGhanaDriversLicense = async (number: string, dob: string) => {
    const verification_data = { number, dob };
    const endpoint = "gh/drivers_license";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyGhanaSSNIT = async (number: string) => {
    const verification_data = { number };
    const endpoint = "gh/ssnit";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifyGhanaVotersCard = async (type: string, number: string) => {
    const verification_data = { type, number };
    const endpoint = "gh/voters";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  // UGANDA DATA VERIFICATION
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

  // SOUTH AFRICA DATA VERIFICATION
  verifySouthAfricaNationalIdentity = async (
    firstname: string,
    lastname: string,
    nationalid: string,
    dob: string
  ) => {
    const verification_data = { firstname, lastname, nationalid, dob };
    const endpoint = "sa/national_id";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifySouthAfricaBusiness = async (
    customer_reference: string,
    customer_name: string,
    reg_number: string
  ) => {
    const verification_data = {
      customer_reference,
      customer_name,
      reg_number,
    };
    const endpoint = "sa/company";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  // SIERRA LONE DATA VERIFICATION
  verifySierraLoneVotersCard = async (
    state: string,
    last_name: string,
    number: string
  ) => {
    const verification_data = { state, last_name, number };
    const endpoint = "sl/voters";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };

  verifySierraLoneDriversLicense = async (
    first_name: string,
    last_name: string,
    dob: string,
    number: string
  ) => {
    const verification_data = { first_name, last_name, dob, number };
    const endpoint = "sl/drivers_license";
    const response = this.#sendRequest(endpoint, verification_data);
    return response;
  };
}

export default PremblyDataVerification;
