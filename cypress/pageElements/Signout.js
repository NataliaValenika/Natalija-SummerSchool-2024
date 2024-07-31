class Signout {
  elements = {
    logOutButton: () =>
      cy.contains('.mt-6 [data-testid="logout-button"]', "Log out"),
  };
}

export default new Signout();
