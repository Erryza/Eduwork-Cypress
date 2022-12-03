describe("Test Case Pay Bills", () => {
  it("Visit Website Pay Bills", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Should try to login", () => {
    cy.fixture("dataPayBills").then((user) => {
      const username = user.username;
      const password = user.password;

      cy.loginPayment(username, password);
    });
  });

  it("Should try to fitur pay bills in pay saved payee", () => {
    cy.fixture("dataPayBills").then((payment) => {
      const paye = payment.paye;
      const account = payment.account;
      const amount = payment.amount;
      const date = payment.date;
      const desc = payment.desc;

      cy.payment(paye, account, amount, date, desc);
    });
  });
});
