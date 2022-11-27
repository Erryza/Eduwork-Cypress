describe("My Second Test", () => {
  it('Clicking "type" shows th eright headings', () => {
    cy.visit("https://example.cypress.io");

    cy.pause();

    cy.contains("type").click();

    // Should be on a new URL which includes "/commands/actions"
    cy.url().should("include", "/commands/actions");

    // Get an input, type into it and verify that the value has been updated
    cy.get(".action-email")
      .type("usertest@gmail.com")
      .should("have.value", "usertest@gmail.com");
  });
});
