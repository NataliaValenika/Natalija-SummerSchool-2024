import Store from "../../pageElements/Store";
import Cart from "../../pageElements/Cart";
import Checkout from "../../pageElements/Checkout";
import Dashboard from "../../pageElements/Dashboard";

// Log into system with already existed
describe("End to end functionality", () => {
  beforeEach(() => {
    cy.login(Cypress.env("username"), Cypress.env("password"));
  });

  // Check the store page functionality
  it("Store page", () => {
    cy.visit("/store");
    cy.openStore();
    Store.elements.sortBy().click();
    Store.elements.viewButton().click();
    cy.url().should("include", "/store/table");
    cy.contains("Products table view");
    Store.elements.productTable();
    Store.elements.viewStore().click();
    cy.get('[href="/us/products/t-shirt"]').click();  // TODO: define element in page objects
    // TODO: check some element is visible so you know that product was clicked successfully
    cy.visit("/products/t-shirt");
    Store.elements.productSize().click();
    Store.elements.productColor().click();
    Store.elements.addToCart().click();
  });

  //Check the cart functionality
  it("Cart", () => {
    cy.visit("/cart");
    cy.openCart();
    cy.url().should("include", "/cart");
    Cart.elements.discount().click();
    Cart.elements.discountInput().should("be.visible");
    Cart.elements.applyButton().click();
    Cart.elements.checkoutButton().click();
    Cart.elements.cartContainer().should("be.visible");
    // cy.pause();        // TODO: remove comments that are forgotten
  });

  //Ensure that checkout is successful
  it("Checkout", () => {
    cy.visit("/checkout?step=address");
    Checkout.elements.adressInfo().should("be.visible");
    Checkout.elements.checkoutInfo().should("be.visible");
    Checkout.elements.shippingFirstName().clear().type("Natalija");
    Checkout.elements.shippingLastName().clear().type("Valenika");
    Checkout.elements.shippingAdress().clear().type("Brivibas");
    Checkout.elements.shippingPotalCode().clear().type("LV-1001");
    Checkout.elements.shipingCity().clear().type("LA");
    Checkout.elements.shippingCountry().select("United States");
    Checkout.elements.submit().click();
    Checkout.elements.deliveryButton1().click();
    Checkout.elements.submitDeliveryButton().click();
    Checkout.elements.submitPymentButton().click();
    Checkout.elements.submitOrderButton().click();
    Checkout.elements.shippingInfo().should("be.visible");
    cy.url().should("include", "order/confirmed");
  });

  //Check dashboard functionality
  it("Dashboard", () => {
    cy.visit("/dashboard");
    cy.openDashboard();
    Dashboard.elements.profileButton().click();
    cy.url().should("include", "/profile");
    Dashboard.elements.pageWrapper().should("be.visible");
    Dashboard.elements.editName().click({ force: true });
    Dashboard.elements.editEmail().click({ force: true });
    Dashboard.elements.editPassword().click({ force: true });
    Dashboard.elements.editAdress().click({ force: true });
    Dashboard.elements.adressButton().click();
    cy.url().should("include", "/addresses");
    Dashboard.elements.addAdressButton().click();
    Dashboard.elements.fillNewAdressModal().should("be.visible");
    Dashboard.elements.inputInAdressName().type("Kirills");
    Dashboard.elements.inputInAdressLastName().type("Valeniks");
    Dashboard.elements.inputAdress().type("Vipinga");
    Dashboard.elements.inputCity().type("Rezekne");
    Dashboard.elements.inputPostalCode().type("LV-4600", { force: true });
    Dashboard.elements.inputCountry().select("United States");
    Dashboard.elements.saveAdressButton().click();
    Dashboard.elements.ordersButton().click();
    cy.url().should("include", "/orders");
    Dashboard.elements.orgerPage().should("be.visible");
    Dashboard.elements.orgerDetailsButton().first().click();
    Dashboard.elements.orgerDetails().should("be.visible");
    Dashboard.elements.overwievButton().click();
    Dashboard.elements.overwievPage().should("be.visible");
  });

  //Signout functionality
  it("Signout", () => {
    cy.visit("/dashboard");
    cy.signout();
  });
});
