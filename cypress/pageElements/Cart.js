class Cart {
  elements = {
    cartButton: () => cy.getByTestId("cart-link"),
    cartContainer: () => cy.getByTestId("cart-container"),
    tittle: () => cy.get(".pb-3 > .font-sans").should("be.visible"),
    selector: () => cy.getByTestId("product-select-button"),
    deleteButton: () => cy.contains(".w-28 > .text-small-regular > .flex"),
    discount: () => cy.getByTestId("add-discount-button"),
    discountInput: () => cy.get("form.w-full > .gap-x-2"),
    discountBox: () => cy.getByTestId("discount-input"),
    applyButton: () => cy.getByTestId("discount-apply-button"),
    checkoutButton: () => cy.getByTestId("checkout-button"),
  };
}

export default new Cart();
