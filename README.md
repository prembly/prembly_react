# PREMBLY PASS

Whether you're building a new application from scratch or adding identity verification to an existing project, Prembly Pass provides a reliable and secure way to verify your users' identities.

This SDK is a TypeScript class that provides methods to verify identities, documents, and businesses.

This SDK has four classes for the verification process:

1. Data verification class
2. General Verification class
3. Global Business Verification class
4. Document verification class

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

const premblyDataVerification = new PremblyDataVerification(
  "your-x-api-key",
  "your-app-id"
);

const { verifyPlateNumber } = premblyDataVerification;

verifyPlateNumber("123456")
  .then((res) => console.log(res))
  .catch((err) => console.err);
```

Note: Replace "your-x-api-key" and "your-app-id" with your actual credentials.

## Prembly General Verification

```javascript
import { PremblyGeneralVerification } from "prembly-pass";

const premblyGeneralVerification = new PremblyGeneralVerification(
  "your-x-api-key",
  "your-app-id"
);

const { emailVerification } = premblyGeneralVerification;

emailVerification("test@email.com")
  .then((res) => console.log(res))
  .catch((err) => console.err);
```

Note: Replace "your-x-api-key" and "your-app-id" with your actual credentials.

## Prembly Document Verification

```javascript
import { PremblyDocumentVerification } from "prembly-pass";

const premblyDocumentVerification = new PremblyDocumentVerification(
  "your-x-api-key",
  "your-app-id"
);

const { documentVerification } = premblyDocumentVerification;

verifyCompanyWithName("PP", "GBR", "img_string")
  .then((res) => console.log(res))
  .catch((err) => console.err);
```

Note: Replace "your-x-api-key" and "your-app-id" with your actual credentials.

## Prembly Global Business Verification

```javascript
import { PremblyGlobalBusinessVerification } from "prembly-pass";

const premblyGlobalBusinessVerification = new PremblyGlobalBusinessVerification(
  "your-x-api-key",
  "your-app-id"
);

const { verifyCompanyWithName } = premblyGlobalBusinessVerification;

verifyCompanyWithName("Test Company", "NG")
  .then((res) => console.log(res))
  .catch((err) => console.err);
```

Note: Replace "your-x-api-key" and "your-app-id" with your actual credentials.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
