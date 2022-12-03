// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("login", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  // enter username
  cy.get("#user-name").clear();
  cy.get("#user-name").type(username);
  // enter password
  cy.get("#password").clear();
  cy.get("#password").type(password);
  // click button login
  cy.get("#login-button").click();
});

Cypress.Commands.add("loginPayment", (username, password) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  // enter username
  cy.get("#user_login").clear();
  cy.get("#user_login").type(username);

  // enter password
  cy.get("#user_password").clear();
  cy.get("#user_password").type(password);

  // click keep me signed in
  cy.get("#user_remember_me").not("[disabled]").check().should("be.checked");

  // click button login
  cy.get("input[value='Sign in']").click();

  // check url after login
  cy.url().should(
    "eq",
    "http://zero.webappsecurity.com/bank/account-summary.html"
  );

  // click pay bills
  cy.get("#pay_bills_tab > a").click();

  // check url pay bills
  cy.url().should("eq", "http://zero.webappsecurity.com/bank/pay-bills.html");
});

Cypress.Commands.add("payment", (paye, account, amount, date, desc) => {
  cy.clearCookies();
  cy.clearLocalStorage();

  // selecting bank of america
  cy.get("select[id='sp_payee']").select(paye).should("have.value", "bofa");

  // selecting checking
  cy.get("select[id='sp_account']").select(account).should("have.value", "2");

  // input amount
  cy.get("input[id='sp_amount']").type(amount);

  // input date
  cy.get("input[id='sp_date']").type(date).should("have.value", "2022-10-03");
  cy.get(".ui-datepicker-days-cell-over > .ui-state-default").click();

  // input description
  cy.get("input[id='sp_description']").type(desc);

  // click button pay
  cy.get("input[id='pay_saved_payees']").click();

  // check url login
  cy.url().should("eq", "http://zero.webappsecurity.com/login.html");
});
