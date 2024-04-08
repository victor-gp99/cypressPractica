/// <reference types="cypress" />
import 'cypress-axe';

describe('Pruebas de accesibilidad' , () => {    
    it('Deberia de cumplir con los estadares de accecibilidad', () => {
        cy.visit('https://www.freerangetesters.com/')
        cy.injectAxe()
        cy.checkA11y('[data-testid="header-container"] > .sc-fbkieD > .sc-dQpIV > :nth-child(1) > .sc-iqHXzD')
    });
    
});