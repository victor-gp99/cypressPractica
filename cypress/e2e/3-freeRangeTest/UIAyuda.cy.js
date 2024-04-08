describe("Pruebas sobre UI", () => {
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
    });
/* it('Ejemplo de esperas', () => {
        cy.wait(1000)
        cy.contains('Challenging DOM').click()
    });*/

    /*it('Nueva pestana', () => {
        cy.contains('Multiple Windows').click()
        cy.contains('Click Here').invoke('removeAttr','target').click()
        //invoke sirve para invocar metodos de jquery
        cy.contains('New Window').should('have.text','New Window')

    });*/

    /*it('Shadow DOM', () => {
        cy.contains('Shadow DOM').click()
        cy.get('ul > :nth-child(2)').should('have.text','In a list!')
    });*/

    /*it('Primer y ultimo elemento', () => {
        cy.contains('Dynamic Content').click()
        cy.get('img').eq(2).should('be.visible')
    });*/

/* it('Padre e hijos', () => {
        cy.contains('Dynamic Content').click()
        cy.get(':nth-child(4) > .large-2 > img').parent()
        cy.get('.example').children()
    });*/

    it('Invoke', () => {
        cy.contains('Dynamic Content').should('be.hidden').invoke('show').should('be.visible')
    });

});