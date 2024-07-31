class Store {
  elements = {
    storeButton: () => cy.getByTestId("store-link"),
    tittle: () => cy.getByTestId("store-page-title").should("be.visible"),
    productId: () => cy.contains(":nth-child(1)", "product-wrapper"),
    productSize: () =>
      cy.get('[data-testid="product-options"] > :nth-child(4)'),
    productColor: () =>
      cy.get(
        ':nth-child(2) > .flex-col > [data-testid="product-options"] > :nth-child(1)',
      ),
    addToCart: () => cy.getByTestId("add-product-button"),
    sortBy: () => cy.get("div.w-full > .font-normal"),
    viewButton: () => cy.getByTestId("table-view-btn"),
    viewStore: () => cy.get("a > .transition-fg"),
    productTable: () => cy.getByTestId("products-table").should("be.visible"),
  };
}

export default new Store();
