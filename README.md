Natalija-SummerSchool-2024

# Summer School 2024 - Cypress Javascript

## Overview

This repository contains code for testing a webstore page using Cypress, a end-to-end testing framework. The tests cover various functionalities of the webstore to ensure it operates as expected.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Cypress (version 9 or higher)
- Git (for version control)
- Visual Studio Code (as your IDE)

## Installation

### Clone the repository:

`git clone <repository_url>`

`cd <repository_name>`

### Install the dependencies:

`npm install`

## Running the Tests

### Opening the Cypress Test Runner

To open the Cypress Test Runner and run tests interactively:

`npx cypress open`

### Running Tests in Headless Mode

To run all the tests in headless mode and output the results to the terminal:

`npx cypress run`

### Running a Single Test

To run a single test file in headless mode, specify the path to the test file:

`npx cypress run --spec cypress/integration/webstore.spec.js`

### Running Tests in Different Browsers

Cypress supports running tests in different browsers. By default, tests run in Electron. To run tests in a different browser, use the --browser flag:

`npx cypress run --browser chrome`

`npx cypress run --browser firefox`

## Important npm scripts

### Code formating

This project uses 'Prettier' package to format the code. Run the following command to format all files:

`npm run format`

### Cypress opening

This project check the test in Cypress framework. To open Cypress framework use following command:

`npm run cypress-open`

### Running the tests

To check tests in Cypress framework use the following command:

`npm run cypress-run`

### Removing the report

HTML report is automatically generated after each run using 'mochawesome'. You can remove the reports using following command:

`npm run report-cleaning`

## Conclusion

This README provides an overview of how to set up and run Cypress tests for a webstore page using GitHub for version control and Visual Studio Code as your IDE. The tests demonstrate basic functionalities, and the structure allows for easy expansion to cover more test scenarios. If you encounter any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
