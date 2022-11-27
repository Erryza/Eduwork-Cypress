describe("My First Test", () => {
  // Visit a page
  it("Visits the Kitchen Sink", () => {
    cy.visit("https://example.cypress.io");
  });

  // Query for an element
  it('Finds the content "type"', () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type");
  });

  // Click an element
  it('Click the link "type"', () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();
  });

  it('Clicking "type" navigates to a new url', () => {
    cy.visit("https://example.cypress.io");
    cy.contains("type").click();

    // Should be on a new URL which include  "/commands/actions"
    cy.url().should("include", "/commands/actions");
  });
});
