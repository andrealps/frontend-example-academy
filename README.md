# Frontend app example


## Project Setup
1. Install dependencies
2. Run server

```sh
npm install
npm run dev
```
The server will always run on port 8080 if available.

### Lint with [ESLint](https://eslint.org/)

Check if there's anything that has to be fixed on the project.
It is recommended to automatically format code on save. You can follow a guide to configure it, e.g [this one](https://www.masrinastudio.com/post/eslint-formatting-vscode-guide/).
```sh
npm run lint
```

### Run unit tests with [Jest](https://jestjs.io/docs/getting-started) and [Vue test utils](https://v1.test-utils.vuejs.org)
The unit tests are located in `src/components/__tests__` folder.
```sh
npm run test:unit
```

### Run e2e tests with [Cypress](https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test)
The e2e tests are located in `cypress/e2e` folder.
The following command opens the Cypress UI. To execute the tests, the server must be running.
```sh
npm run test:e2e
```
