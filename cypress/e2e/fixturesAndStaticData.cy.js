describe("Test case login page", () => {
  before(() => {
    cy.visit("https://www.saucedemo.com/");
    cy.url().should("include", "https://www.saucedemo.com/");
  });

  it("Should try to login", () => {
    cy.fixture("dataUser")
      .its("data")
      .then((user) => {
        user.forEach((user) => {
          const username = user.username;
          const password = user.password;

          cy.login(username, password);
        });
      });

    //   OR

    // cy.fixture("dataUser")
    //   .its("data")
    //   .each((user) => {
    //     const username = user.username;
    //     const password = user.password;

    //     cy.login(username, password);
    //   });
  });

  it.only("login", () => {
    cy.get("#user-name").type("standard_user");
    cy.get("#password").type("secret_sauce");
    // click button login
    cy.get("#login-button").click();
  });

  it.only("Should try to selecting products", () => {
    cy.fixture("dataSelect")
      .its("listNameSelect")
      .each((list) => {
        cy.get(".product_sort_container")
          .select(list.name)
          .invoke("val")
          .should("deep.equal", list.val)
          .wait(100);
      });
  });
});
