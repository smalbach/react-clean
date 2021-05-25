/// <reference types="cypress" />

describe("<List products />", () => {
  it("<Produucts/> - should existe products", () => {
    cy.visit("/");
    cy.contains("h1", "Order App");
    cy.contains("h3", "Shopping Cart");

    cy.get("[data-cy=title]").invoke("text").should("equal", "Order App");
    cy.get("[data-cy=footer-title]")
      .invoke("text")
      .should("equal", "React app");
    cy.get(".button-add").first().should("exist");
  });

  it("<Add tocart/> - should add item to cart", () => {
    cy.visit("/");

    cy.get(".button-add").first().click();

    cy.get(".cart-detail").should("exist");
  });

  it("<Add Item remove /> - should remove item to cart", () => {
    cy.visit("/");

    cy.get(".button-add").first().click();

    cy.get(".cart-detail").should("exist");

    cy.get(".button-remove").first().click();

    cy.get(".cart-detail").should("not.exist");
  });

  it("<Add add del quantity/> - should add and del 1  to item quantity", () => {
    cy.visit("/");

    cy.get(".button-add").first().click();

    cy.get(".cart-detail").should("exist");

    cy.get(".increase-quantity").first().click();

    cy.get(".product-quantity")
      .first()
      .should("exist")
      .should("have.text", "2");

    cy.get(".decrease-quantity").first().click();

    cy.get(".product-quantity")
      .first()
      .should("exist")
      .should("have.text", "1");
  });

  it("<Add add multiples/> - should add 2 items to cart", () => {
    cy.visit("/");

    cy.get(".button-add").eq(0).click();
    cy.get(".cart-detail").should("have.length", 1);
    cy.get(".button-add").eq(1).click();
    cy.get(".cart-detail").should("have.length", 2);
    cy.get(".button-add").eq(2).click();
    cy.get(".cart-detail").should("have.length", 3);
    cy.get(".button-add").eq(3).click();
    cy.get(".cart-detail").should("have.length", 4);

    cy.get(".button-remove").first().click();
    cy.get(".cart-detail").should("have.length", 3);
    cy.get(".button-remove").first().click();
    cy.get(".cart-detail").should("have.length", 2);
    cy.get(".button-remove").first().click();
    cy.get(".cart-detail").should("have.length", 1);
  });

  it("<Add add multiples/> - should add 2 items to cart", () => {
    cy.visit("/");

    cy.get(".button-add").eq(0).click();
    cy.get(".cart-detail").should("have.length", 1);
    cy.get(".button-add").eq(0).click();
    cy.get(".cart-detail").should("have.length", 1);
  });

  it("<Add Checkout empty cart/> - should show message empty", () => {
    cy.visit("/");

    cy.get(".checkout").should("exist").should("have.text", "Checkout").click();

    cy.get(".swal2-title").should("exist").should("have.text", "Empty cart!");

    cy.get(".swal2-confirm")
      .should("exist")
      .should("have.text", "Back")
      .click();

    cy.get(".swal2-confirm").should("not.exist");
  });

  it("<Add Checkout /> - should show message success", () => {
    cy.visit("/");

    cy.get(".button-add").eq(0).click();
    cy.get(".cart-detail").should("have.length", 1);

    cy.get(".checkout").click();

    cy.get(".swal2-title").should("exist").should("have.text", "Thanks!!!");

    cy.get(".swal2-confirm")
      .should("exist")
      .should("have.text", "New order")
      .click();

    cy.get(".swal2-confirm").should("not.exist");
  });
});
