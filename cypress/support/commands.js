// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Login from "../pageElements/Login";
import Signout from "../pageElements/Signout";
import Global from "../pageElements/Global";
import Home from "../pageElements/Home";
import Store from "../pageElements/Store";
import Cart from "../pageElements/Cart";
import Checkout from "../pageElements/Checkout";
import Dashboard from "../pageElements/Dashboard";

//Get the objects by id
Cypress.Commands.add("getByTestId", (id) => {
  cy.get(`[data-testid=${id}]`);
});

//Loginto system an check if we are on the right page by link
Cypress.Commands.add("login", (username, password) => {
  cy.session([username, password], () => {
    cy.visit("/");
    Login.elements.emailInput().type(username);
    Login.elements.passwordInput().type(password);
    Login.elements.signInButton().click();
    Home.elements.headerLink().should("be.visible");
  });
});

//Signout from system and check if we are on the right page by link
Cypress.Commands.add("signout", () => {
  Global.elements.sideBarBurger().click();
  Signout.elements.logOutButton().click();
  cy.url().should("include", "/us/sign-in");
});

//Open the Store through side bar and check the link of page
Cypress.Commands.add("openStore", () => {
  Global.elements.sideBarBurger().click();
  Store.elements.storeButton().click();
  Global.navigateSideBar.openPage("Store");
  cy.url().should("include", "/store");
});

//Open the Cart through side bar and check if we are on right page by link
Cypress.Commands.add("openCart", () => {
  Global.elements.sideBarBurger().click();
  Cart.elements.cartButton().click();
  Global.navigateSideBar.openPage("Cart");
  cy.url().should("include", "/cart");
  Cart.elements.cartContainer().should("be.visible");
});

//Open the Dashboard through side bar and check that info is visible and we are on the right page
Cypress.Commands.add("openDashboard", () => {
  Global.elements.sideBarBurger().click();
  Dashboard.elements.dashboardButton().click();
  cy.url().should("include", "/dashboard");
  Dashboard.elements.accountInfo().should("be.visible");
});
