const TEST_URL = "https://sandbox.myidentitypass.com/";
const LIVE_URL = "https://api.myidentitypass.com/";

export default async function postRequest(
  endpoint: string,
  verification_data: Record<string, string>,
  x_api_key: string,
  app_id: string,
  environment: string,
  custom_url?: string
) {
  if (environment !== "test" && environment !== "live") {
    return "set environment to either test or live";
  }

  const urlPath = custom_url || "api/v2/biometrics/merchant/data/verification/";

  const baseUrl =
    environment === "test"
      ? `${TEST_URL}${urlPath}${endpoint}`
      : `${LIVE_URL}${urlPath}${endpoint}`;

  const headers = {
    accept: "application/json",
    "x-api-key": x_api_key,
    "content-type": "application/x-www-form-urlencoded",
    ...(environment === "live" && { app_id }),
  };

  const options = {
    method: "POST",
    headers,
    body: new URLSearchParams(verification_data),
  };

  try {
    const response = await fetch(baseUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return `${endpoint} Verification Error: ${error}`;
  }
}
