describe('Cart features', () => {
    it('TC-001: FE | Add new product to cart with some specifics', () => {
        cy.visit('/');
        cy.get('[data-id-product="3"] > .thumbnail-container > .thumbnail > img').click();
        cy.get('select').select('60x90cm').should('have.value', '20');
        cy.contains(' Add to cart ').click();
        cy.contains('Continue shopping').click();
        cy.get('.blockcart').click();
        cy.screenshot();
    });

    it('TC-002: FE | Add two items of the same product to cart', () => {
        cy.visit('/');
        cy.scrollTo(0, '800px');
        cy.get('[data-id-product="7"] > .thumbnail-container > .thumbnail > img').click();
        cy.get('.bootstrap-touchspin-up > .material-icons').click();
        cy.contains(' Add to cart ').click();
        cy.contains('Continue shopping').click();
        cy.get('.blockcart').click();
        cy.screenshot();
    });

    it('TC-003: FE | Search a product, change the color, add to cart and delete it', () => {
        cy.visit('/');
        cy.get('.ui-autocomplete-input').type('BROWN BEAR');
        cy.get('button > .material-icons').click();
        cy.get('[data-id-product="10"] > .thumbnail-container > .thumbnail > img').click();
        cy.get(':nth-child(2) > label > .input-color').click();
        cy.contains(' Add to cart ').click();
        cy.contains('Proceed to checkout').click();
        cy.get('.remove-from-cart > .material-icons').click();
        cy.screenshot();
    });
});