/* eslint-disable no-undef */
describe("Form actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Shows an error if fields are empty", () => {
    cy.get("[data-testid=submit]").click();
    cy.contains("All fields must be filled out").should("be.visible");
  });

  it("Shows an error if empty spaces if one or many fields have whitespaces only", () => {
    cy.get("[data-testid=firstName]").type("test");
    cy.get("[data-testid=lastName]").type("  ");
    cy.get("[data-testid=email]").type("valid@email.com");
    cy.get("[data-testid=phoneNumber]").type(" ");
    cy.get("[data-testid=country]").type("France");
    cy.get("[data-testid=favoriteDish]").type(" ");
    cy.get("[data-testid=submit]").click();
    cy.contains("All fields must be filled out").should("be.visible");
  });

  it("Shows an error in case of a non-French phone number", () => {
    cy.get("[data-testid=firstName]").type("My");
    cy.get("[data-testid=lastName]").type("Name");
    cy.get("[data-testid=email]").type("valid@email.com");
    cy.get("[data-testid=phoneNumber]").type("012345678");
    cy.get("[data-testid=country]").type("France");
    cy.get("[data-testid=favoriteDish]").type("Pizza");
    cy.get("[data-testid=submit]").click();
    cy.contains("Invalid phone number").should("be.visible");
  });

  it("Shows an error in case of an invalid email", () => {
    cy.get("[data-testid=firstName]").type("My");
    cy.get("[data-testid=lastName]").type("Name");
    cy.get("[data-testid=email]").type("invalid e-mail");
    cy.get("[data-testid=phoneNumber]").type("0123456789");
    cy.get("[data-testid=country]").type("France");
    cy.get("[data-testid=favoriteDish]").type("Pizza");
    cy.get("[data-testid=submit]").click();
    cy.contains("Invalid e-mail").should("be.visible");
  });

  it("Resets fields if form is successfully submitted", () => {
    cy.get("[data-testid=firstName]").type("My");
    cy.get("[data-testid=lastName]").type("Name");
    cy.get("[data-testid=email]").type("valid@email.com");
    cy.get("[data-testid=phoneNumber]").type("0123456789");
    cy.get("[data-testid=country]").type("France");
    cy.get("[data-testid=favoriteDish]").type("Pizza");
    cy.get("[data-testid=submit]").click();
    cy.get("input").should("have.value", "");
  });

  it("Shows a success message if data has been sent to API", () => {
    cy.get("[data-testid=firstName]").type("My");
    cy.get("[data-testid=lastName]").type("Name");
    cy.get("[data-testid=email]").type("valid@email.com");
    cy.get("[data-testid=phoneNumber]").type("0123456789");
    cy.get("[data-testid=country]").type("France");
    cy.get("[data-testid=favoriteDish]").type("Pizza");
    cy.get("[data-testid=submit]").click();
    cy.contains("Entry successfully added!").should("be.visible");
  });
});
