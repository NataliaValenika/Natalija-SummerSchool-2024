class Signout {

    elements = {
    logoutButton: () => cy.getByTestId("log-out-button"),

};
}

export default new Signout();
