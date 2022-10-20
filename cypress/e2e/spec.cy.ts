describe("empty spec", () => {
  it("passes", () => {
    cy.visit("localhost:3000/");
    cy.contains("Welcome to Next.js!").should("be.visible");
  });
});
