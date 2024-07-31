class Dashboard {
  elements = {
    dashboardButton: () => cy.getByTestId("nav-account-link"),
    accountInfo: () => cy.getByTestId("account-page"),
    overwievPage: () => cy.getByTestId("dashboard-page-wrapper"),
    overwievButton: () => cy.getByTestId("overview-link"),
    profileButton: () => cy.get(':nth-child(2) > [data-testid="profile-link"]'),
    pageWrapper: () => cy.getByTestId("profile-page-wrapper"), // visible
    editName: () => cy.getByTestId("account-name-editor"),
    editEmail: () => cy.getByTestId("account-email-editor"),
    editPassword: () => cy.getByTestId("account-password-editor"),
    editAdress: () => cy.getByTestId("account-billing-address-editor"),
    adressButton: () => cy.getByTestId("addresses-link"),
    addAdressButton: () => cy.getByTestId("add-address-button"),
    fillNewAdressModal: () => cy.getByTestId("add-address-modal"),
    saveAdressButton: () => cy.getByTestId("save-button"),
    cancelNewAdress: () => cy.getByTestId("cancel-button"),
    ordersButton: () => cy.getByTestId("orders-link"),
    orgerPage: () => cy.getByTestId("orders-page-wrapper"),
    orgerDetailsButton: () => cy.getByTestId("order-details-link"), //click
    orgerDetails: () => cy.getByTestId("order-details-container"), //be visible
    inputInAdressName: () => cy.getByTestId("first-name-input"),
    inputInAdressLastName: () => cy.getByTestId("last-name-input"),
    inputAdress: () => cy.getByTestId("address-1-input"),
    inputCity: () => cy.getByTestId("city-input"),
    inputPostalCode: () => cy.getByTestId("postal-code-input"),
    inputCountry: () => cy.getByTestId("country-select"),
  };
}

export default new Dashboard();
