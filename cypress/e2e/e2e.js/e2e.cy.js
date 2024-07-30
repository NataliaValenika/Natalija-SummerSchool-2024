import Global from "../../pageElements/Global";
import Login from "../../pageElements/Login";
import Home from "../../pageElements/Home";

describe("End to end functionality", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Opens webstore page", () => {
    cy.contains("h1", "Welcome back");
    Login.elements.emailInput("should.be", "visible");
    Login.elements.passwordInput("should.be", "visible");
    Login.elements.signInButton("should.be", "visible");
  });
  it("Logs into webstore", () => {
    cy.login("valenika2001@gmail.com", "bazuka1408");
    //cy.getByTestId('email-input').should('be.visible').type('valenika2001@gmail.com');
    //cy.getByTestId('password-input').should('be.visible').type('bazuka1408');
    //cy.getByTestId('sign-in-button').click();
    cy.url().should('include', '/us');
    Home.elements.headerLink().contains("Store of Excellence");
    Home.elements.productLink().should("have.length", 4);
    Global.navigateSideBar.openPage("Store");
  });

  it("Store page", () => {
    cy.visit("/Store");
    //cy.getByTestId('nav-store-link').contains('Store of Excellence');
    //cy.getByTestId('product-wrapper').should('have.length', 4);
    //Global.navigateSideBar.openPage('Store');
  });

  it("Multi language support", () => {
    cy.visit("/Dashboard");
    //Global.navigateSideBar.openPage('');
  });

  it("Cart", () => {
    cy.visit("/Cart");
  });

  it("Multi language support", () => {
    cy.visit("/Dashboard");
    //Global.navigateSideBar.openPage('');
  });

  it("Dashboard", () => {
    cy.visit("/Dashboard");
  });

  it("Sign out", () => {
    cy.visit("/Dashboard");
    Signout.elements.logoutButton().click();
    cy.url().should('include', '/us/sign-in')
    //Global.navigateSideBar.openPage('');
  });
});
