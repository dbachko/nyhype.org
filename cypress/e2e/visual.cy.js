describe('Visual Tests', () => {
  it('Home page visual test', () => {
    cy.visit('/');
    cy.wait(1000); // Allow for all assets to load
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('About page visual test', () => {
    cy.visit('/about');
    cy.wait(1000); // Allow for all assets to load
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });

  it('Products page visual test', () => {
    cy.visit('/products');
    cy.wait(1000); // Allow for all assets to load
    cy.get('header').should('be.visible');
    cy.get('footer').should('be.visible');
  });
});