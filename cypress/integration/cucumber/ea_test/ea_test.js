import { Given, And } from "cypress-cucumber-preprocessor/steps";

Given('I visit EA site', () => {
  cy.visit("/");
});

Given('I click login link', () => {
  cy.contains("Login").click();
});

And('I login as following', (dataTable) => {
  const customThresholds = {
    performance: 70,
    accessibility: 50,
    seo: 60,
    'first-contentful-paint': 2000,
    'largest-contentful-paint': 3000,
    'cumulative-layout-shift': 0.1,
    'total-blocking-time': 500,
  };

  const desktopConfig = {
    formFactor: 'desktop',
    screenEmulation: { disabled: true },
  };
  
  cy.lighthouse(customThresholds, desktopConfig);
  
  dataTable.hashes().forEach(row => {
      cy.get('#UserName').type(row.userName);
      //extra param to hide password in log while running in CI
      cy.get('#Password').type(row.Password, { log: false });
  })
  cy.get(".btn").click();
});