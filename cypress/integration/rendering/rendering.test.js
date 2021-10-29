/* eslint-disable no-undef */

describe("Application rendering", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Loads the page correctly", () => {
    cy.get("header").get("[data-testid=banner]").should("exist");
    cy.get("[data-testid=form]").should("exist");
  });

  it("Checks if form contains all fields and submit button", () => {
    cy.get("[data-testid=firstName]").should("exist");
    cy.get("[data-testid=lastName]").should("exist");
    cy.get("[data-testid=email]").should("exist");
    cy.get("[data-testid=phoneNumber]").should("exist");
    cy.get("[data-testid=country]").should("exist");
    cy.get("[data-testid=favoriteDish]").should("exist");
    cy.get("[data-testid=submit]").should("exist");
  });
});

describe("Reponsive layout rendering on mobile", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Displays page components correctly", () => {
    cy.viewport(320, 480);
    cy.get("header").get("[data-testid=banner]").should("be.visible");
    cy.get("[data-testid=form]").should("be.visible");
  });
});
