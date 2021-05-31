## cypress-economist-assignment

## Introduction

This is a framework based on Cypress to do end-to-end testing for the tasks given in the assignment by The Economist.

Below test scenarios have been covered in this framework.

### Scenarios
 - Jobs page renders correctly with the following components visible:
    - navigation bar
    - search fields
    - sector lists
 - Both 'Sign in' and 'Create account' links go to their respective pages.
 - Each of the links in the navigation bar is functional and goes to the correct page (bonus points if you can do this with a loop).
 - Clicking on a sector shows a list of jobs from only that sector. Clicking further on a job listing shows you the job details, with an 'apply' button.
 - Searching for a job correctly displays relevant search results.



## Folder structure
- We have folowed Page Object Model design pattern to create our test scenarios.
- All the test cases have been placed under `cypress/integration/tests` folder
- All the page objects are under `/cypress/pages` folder. Since we are following Page Object Model design pattern, separate page class files have been created for the different types of pages in the application.
- The test data to be used in the tests is stored under `/cypress/fixtures` folder. Page wise test data json files have been created to be used in different test cases.



## Running tests

- To execute all the test files via terminal, open the terminal and go to the root folder of the project and use below command - 
```
npm test
```
This will execute all the test files under ../tests folder on Chrome browser.

- To execute the tests via Cypress test runner, use below command - 
```
npm run cypress:open
```
This will launch the Cypress runner. All your tests will be displayed on the GUI and you can click on the test you want to run.



## Reporting
- We have used moachawesome reports for reporting purpose. After the test execution is completed, an HTML report would be generated under `/cypress/reports/mochareports` folder.
- In case of a test failures, screenshots would be generated under `/cypress/screenshots` folder.
- Videos have been turned off. In case you want to get the videos, go to cypress.json and make ```"video" : true```

