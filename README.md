# PREMBLY PASS

Whether you're building a new application from scratch or adding identity verification to an existing project, Prembly Pass provides a reliable and secure way to verify your users' identities.

This SDK provides easier way for verifying identities, documents, and businesses with prembly's identitypass API.

This SDK is fully written in typescript.

NOTE - you must pass the parameters correctly and accordingly. hover over the methods to see the parameters in accord orders.

## Getting Started

To install the Prembly Pass SDK for identity verification, run the following command:

```javascript
npm install prembly-pass

# or

yarn add prembly-pass
```

## Prembly Data Verification

```javascript
import { PremblyDataVerification } from "prembly-pass";

const config = {
  x_api_key: "your-x-api-key",
  app_id: "your-app-id",
  environment: "test", // 'test' or 'live'
};

const premblyDataVerification = new PremblyDataVerification(config);

const { nigeria, kenya, ghana, uganda, southAfrica, sierraLeone, rwanda } =
  premblyDataVerification;

function App() {
  const handleCACVerification = async () => {
    nigeria
      .verifyCAC("BN", "092932", "TEST COMPANY")
      .then((res) => console.log(res));
  };

  return (
    <div>
      <h1>Data Verification app</h1>
      <button onClick={handleCACVerification}>Verify CAC</button>
    </div>
  );
}

export default App;
```

Note: Replace "your-x-api-key" and "your-app-id" with your actual credentials.

##### countries Data verification that are available:

- Any countries other than NIGERIA has their country name after the `verify` prefix

| SN  | Countries    | Examples                              |
| --- | ------------ | ------------------------------------- |
| 1   | Nigeira      | `verifyBVN()` , `verifyPlateNumber()` |
| 2   | Kenya        | `verifyKenyaNationalId()`             |
| 3   | Ghana        | `verifyGhanaInternationalPassport()`  |
| 4   | Uganda       | `verifyUgandaBusiness()`              |
| 5   | South Africa | `verifySouthAfricaNationalIdentity()` |
| 6   | Sierra Lone  | `verifySierraLoneDriversLicense()`    |
| 7   | Rwanda       | `verifyRwandaNID()`                   |

## Prembly General Verification

```javascript
import React, { useState } from "react";
import { PremblyGeneralVerification } from "prembly-pass";

const config = {
  x_api_key: "YOUR_X_API_KEY",
  app_id: "YOUR_APP_ID",
  environment: "test", //'test' or 'live'
};

const premblyGeneralVerification = new PremblyGeneralVerification(config);

const App = () => {
  const [emailVerificationResult, setEmailVerificationResult] = useState(null);
  const [vehicleVerificationResult, setVehicleVerificationResult] =
    useState(null);

  const handleEmailVerification = async () => {
    try {
      const response = await premblyGeneralVerification.emailVerification(
        "test@test.com"
      );
      console.log(response);
      setEmailVerificationResult(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVehicleVerification = async () => {
    try {
      const response = await premblyGeneralVerification.vehicleVerification(
        "AAA00000000"
      );
      console.log(response);
      setVehicleVerificationResult(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Email Verification</h2>
      <button onClick={handleEmailVerification}>Verify Email</button>
      {emailVerificationResult && (
        <div>
          <h3>Email Verification Result:</h3>
          <pre>{JSON.stringify(emailVerificationResult.data)}</pre>
        </div>
      )}

      <h2>Vehicle Verification</h2>
      <button onClick={handleVehicleVerification}>Verify Vehicle number</button>
      {vehicleVerificationResult && (
        <div>
          <h3>vehicle Verification Result:</h3>
          <pre>{JSON.stringify(vehicleVerificationResult.data)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
```

Note: Replace "your-x-api-key" and "your-app-id" with your actual credentials.

## Prembly Document Verification

```javascript
import React from "react";
import { PremblyDocumentVerification } from "prembly-pass";

const config = {
  x_api_key: "YOUR_X_API_KEY",
  app_id: "YOUR_APP_ID",
  environment: "test", // 'test' or 'live'
};

const premblyDocumentVerification = new PremblyDocumentVerification(config);

function App() {
  const handleDocumentVerification = async () => {
    const response = await premblyDocumentVerification.documentVerification(
      "PP",
      "NG",
      "Base 64 url"
    );
    console.log(response);
  };

  return (
    <div>
      <h1>Document Verification app</h1>
      <button onClick={handleDocumentVerification}>Verify Document</button>
    </div>
  );
}

export default App;
```

Note: Replace "your-x-api-key" and "your-app-id" with your actual credentials.

## Prembly Global Business Verification

```javascript
import { PremblyGlobalBusinessVerification } from "prembly-pass";

const config = {
  x_api_key: "your-x-api-key",
  app_id: "your-app-id",
  environment: "test", // 'test' or 'live'
};

const premblyGlobalBusinessVerification = new PremblyGlobalBusinessVerification(
  config
);

const { companySearchWithName } = premblyGlobalBusinessVerification;

const App = () => {
  const [searchResult, setSearchResult] = useState(null);
  const [companyName, setCompanyName] = useState("");
  const [countryCode, setCountryCode] = useState("");

  const handleSearch = async () => {
    try {
      const response = await companySearchWithName(companyName, countryCode);
      console.log(response);
      setSearchResult(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Business Verification</h2>
      <label>
        Company Name:
        <input
          type="text"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />
      </label>
      <label>
        Country Code:
        <input
          type="text"
          value={countryCode}
          onChange={(e) => setCountryCode(e.target.value)}
        />
      </label>
      <button onClick={handleSearch}>Search</button>
      {searchResult && (
        <div>
          <h3>Search Result:</h3>
          <pre>{JSON.stringify(searchResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
```

Note: Replace "your-x-api-key" and "your-app-id" with your actual credentials.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

##### Author: Olowoniyi Daniel

##### Twitter - [link](https://twitter.com/iamdanztee)

##### Github - [link](https://github.com/Danztee)
