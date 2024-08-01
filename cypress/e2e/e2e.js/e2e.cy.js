import Global from "../../pageElements/Global"; // when you submit project check if no unused classes
import Login from "../../pageElements/Login";
import Home from "../../pageElements/Home";
import Signout from "../../pageElements/Signout";
import Store from "../../pageElements/Store";
import Cart from "../../pageElements/Cart";
import Checkout from "../../pageElements/Checkout";
import Dashboard from "../../pageElements/Dashboard";


// Log into system
describe("End to end functionality", () => {
  beforeEach(() => {
    cy.login(Cypress.env('username'), Cypress.env('password'));
  });

// Check the store page functionality (sort by button, view button, )
  it("Store page", () => {
    cy.visit("/store"); 
    cy.openStore();
    Store.elements.sortBy().click();
    Store.elements.viewButton().click();
    cy.url().should("include", "/store/table");
    cy.contains("Products table view");
    Store.elements.productTable();
    Store.elements.viewStore().click();
    cy.get('[href="/us/products/t-shirt"]').click();
    cy.visit("/products/t-shirt");
    Store.elements.productSize().click();
    Store.elements.productColor().click();
    Store.elements.addToCart().click();
  });

  it("Cart", () => {
    cy.visit("/cart");
    cy.openCart();
    Cart.elements.discount().click();
    Cart.elements.discountInput().should("be.visible");
    Cart.elements.applyButton().click();
    Cart.elements.checkoutButton().click();
    // cy.pause();
    // check that checkout page is visible
  });

  it("Checkout", () => {
    cy.visit("/checkout?step=address");
    //Global.navigateSideBar.openPage('Cart');
    //Cart.elements.checkoutButton().click();
    //Checkout.elements.editAdressButton().click(); // click edit button
    Checkout.elements.shippingFirstName().clear().type("Natalija");
    Checkout.elements.shippingLastName().clear().type("Valenika");
    Checkout.elements.shippingAdress().clear().type("Brivibas");
    Checkout.elements.shippingPotalCode().clear().type("LV-1001");
    Checkout.elements.shipingCity().clear().type("LA");
    Checkout.elements.shippingCountry().select("United States");
    Checkout.elements.submit().click();
    //Checkout.elements.editDelivery().click();
    Checkout.elements.deliveryButton1().click();
    Checkout.elements.submitDeliveryButton().click();
    Checkout.elements.submitPymentButton().click();
    Checkout.elements.submitOrderButton().click();
    cy.url().should("include", "order/confirmed");
  });

  it("Dashboard", () => {
    cy.visit("/dashboard");
    cy.openDashboard(); // maybe call it openDashboard or similar?
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

  it("Signout", () => {
    cy.visit("/dashboard");
    cy.signout();
  });
});
