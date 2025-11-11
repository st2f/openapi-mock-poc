
# OpenAPI Mock POC

This project demonstrates a simple **OpenAPI mock server** with automated tests using **Prism**, **Vitest**, and a generated TypeScript client.

---

## Features

- Generate TypeScript client from OpenAPI specification
- Start a mock server to simulate API responses
- Run automated tests against the mock API

---

## Scripts

```bash
# Install dependencies
npm install

# Generate TypeScript client from OpenAPI spec
npm run generate

# Start Prism mock server
npm run mock

# Run automated tests
npm run test
```

---

## Notes

* The mock server runs at: `http://127.0.0.1:4010`
* Tests are written using **Vitest**
* The generated client is located in `client/`
* This is a lightweight POC for demonstration purposes; not production-ready

## Results

<img width="1866" height="1502" alt="image" src="https://github.com/user-attachments/assets/1f39acdf-994c-45c1-a7ac-92b80d930f76" />

