describe("My First Test", () => {
  it("Visiting my own site", () => {
    cy.visit("https://lmsvm.herokuapp.com/");
  });
  it("Login button", () => {
    cy.get("#but").click();
  });
  it("Enter value", () => {
    cy.get('[type="text"]').type("mvairamuthu2003@gmail.com");
  });
  it("Enter value", () => {
    cy.get('[type="password"]').type("muthu12345");
  });
  it("Enter", () => {
    cy.get("form > button").click();
  });
  it("Buy course", () => {
    cy.get('[href="/task"] > #but').click();
  });
  it("Type a task", () => {
    cy.get("#task").type("Testing now");
  });
  it("Add a task", () => {
    cy.get("form > :nth-child(2) > .btn").click();
  });
});
