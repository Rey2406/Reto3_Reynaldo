describe('Cart features', () => {
    it('TC-004: FE | Sort a product by desc', () => {
        cy.visit('/');
        cy.get('[href="http://www.testingyes.com/onlineshop/6-accessories"]').click();
        cy.get('.category-sub-menu > :nth-child(1) > a').click();
        cy.get('.btn-unstyle').click();
        cy.get('[href="http://www.testingyes.com/onlineshop/7-stationery?order=product.name.desc"]').click();
        cy.screenshot();
    });

    it('TC-005: FE | Filter a product by composition', () => {
        cy.visit('/');
        cy.get('[href="http://www.testingyes.com/onlineshop/6-accessories"]').click();
        cy.contains('Ceramic').click();
        cy.screenshot();
    });
});