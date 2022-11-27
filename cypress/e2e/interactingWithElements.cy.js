describe("Website Zero Bank", () => {
  it("Visit website Zero Bank", () => {
    cy.visit("http://zero.webappsecurity.com/login.html");
    cy.url().should("include", "login.html");
  });

  it("Check contains login to Zero Bank", () => {
    // title navbar and title form login
    cy.get(".brand").should("contain", "Zero Bank");
    cy.get(".page-header").should("contain", "Log in to ZeroBank");

    // login
    cy.get(".control-label").should("contain", "Login");
    cy.get("#user_login")
      .should("be.visible")
      .should("have.attr", "type", "text");

    // icon question mark
    cy.get(".icon-question-sign").should("be.visible");

    // password
    cy.get(".control-label").should("contain", "Password");
    cy.get("#user_password")
      .should("be.visible")
      .should("have.attr", "type", "password");

    // keep me signed in
    cy.get(".control-label").should("contain", "Keep me signed in");
    cy.get("#user_remember_me")
      .should("be.visible")
      .should("have.attr", "type", "checkbox");

    // button login
    cy.get("input[name='submit']")
      .should("be.visible")
      .should("have.attr", "type", "submit");

    // forgot password
    cy.get("a[href='/forgot-password.html']").should(
      "contain",
      "Forgot your password"
    );
  });

  it("Click keep me signed in", () => {
    cy.get("input[id='user_remember_me']")
      .not("[disabled]")
      .check()
      .should("be.checked");
  });

  it("Click forgot your password", () => {
    cy.get("a[href='/forgot-password.html']")
      .should("contain", "Forgot your password")
      .click();
    cy.url().should("include", "forgot-password.html");

    // back location url login
    cy.go("back");
    cy.url().should("include", "login.html");
  });
});
