const BASE_URL =
  "https://sandbox.myidentitypass.com/api/v2/biometrics/merchant/data/verification/";

export default async function apiRequest(
  endpoint: string,
  verification_data: any,
  x_api_key: string,
  app_id: string
) {
  const url = `${BASE_URL}${endpoint}`;

  const headers = {
    accept: "application/json",
    "x-api-key": x_api_key,
    // "app-id": app_id,
    "content-type": "application/x-www-form-urlencoded",
  } as Record<string, string>;

  const options: RequestInit = {
    method: "POST",
    headers,
    body: new URLSearchParams(verification_data),
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
  } catch (error) {
    return `${endpoint} Verification Error: ${error}`;
  }
}
