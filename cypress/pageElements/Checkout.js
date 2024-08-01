class Checkout {
  elements = {
    checkoutInfo: () => cy.getByTestId("checkout-container"),
    shippingInfo: () => cy.get(":nth-child(2) > .text-small-regular > div"),
    firstName: () => cy.getByTestId("shipping-first-name-input"),
    adress: () => cy.getByTestId("shipping-address-input"),
    postalCode: () => cy.getByTestId("shipping-postal-code-input"),
    lastName: () => cy.getByTestId("shipping-last-name-input"),
    city: () => cy.getByTestId("shipping-city-input"),
    phone: () => cy.getByTestId("shipping-phone-input"),
    submit: () => cy.getByTestId("submit-address-button"),
    editAdressButton: () => cy.getByTestId("edit-address-button"),
    editDelivery: () => cy.getByTestId("edit-delivery-button"),
    deliveryButton1: () => cy.getByTestId("radio-button"),
    submitDeliveryButton: () => cy.getByTestId("submit-delivery-option-button"),
    submitPymentButton: () => cy.getByTestId("submit-payment-button"),
    submitOrderButton: () => cy.getByTestId("submit-order-button"),
    shippingFirstName: () => cy.getByTestId("shipping-first-name-input"),
    shippingLastName: () => cy.getByTestId("shipping-last-name-input"),
    shippingAdress: () => cy.getByTestId("shipping-address-input"),
    shippingPotalCode: () => cy.getByTestId("shipping-postal-code-input"),
    shipingCity: () => cy.getByTestId("shipping-city-input"),
    shippingCountry: () =>
      cy.getByTestId("shipping-country-select").select("United States"),
  };

  fillFirstName(firstName) {
    this.elements.firstName().clear().type(firstName);
  }

  fillAdress(adress) {
    this.elements.adress().clear().type(adress);
  }

  fillPostalCode(postalCode) {
    this.elements.postalCode().clear().type(postalCode);
  }

  fillLastName(lastName) {
    this.elements.lastName().clear().type(lastName);
  }

  fillCity(city) {
    this.elements.city().clear().type(city);
  }

  fillPhone(phone) {
    this.elements.phone().clear().type(phone);
  }
}

export default new Checkout();
