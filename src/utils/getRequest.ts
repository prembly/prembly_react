const TEST_URL = "https://sandbox.myidentitypass.com/";
const LIVE_URL = "https://api.myidentitypass.com/";

export default async function getRequest(
  endpoint: string,
  x_api_key: string,
  app_id: string,
  environment: string,
  url?: string
) {
  if (environment !== "test" && environment !== "live") {
    return "set environment to either test or live";
  }

  const urlPath = url || "api/v2/biometrics/merchant/data/";

  const baseUrl =
    environment === "test"
      ? `${TEST_URL}${urlPath}${endpoint}`
      : `${LIVE_URL}${urlPath}${endpoint}`;

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      "x-api-key": x_api_key,
      ...(environment === "live" && { app_id }),
    },
  };

  try {
    const response = await fetch(baseUrl, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return `${endpoint} Verification Error: ${error}`;
  }
}
