// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('iframe', { prevSubject: 'element' }, ($iframe, selector) => {
    Cypress.log({
        name: 'iframe',
        consoleProps() {
        return {
            iframe: $iframe,
        };
        },
    });
    return new Cypress.Promise(resolve => {
        resolve($iframe.contents().find(selector));
    });
});

Cypress.Commands.add('login', () => {
    cy.request({
        method: 'POST',
        url: 'https://the-internet.herokuapp.com/authenticate',
        form: true,
        body: {
            username: 'tomsmith',
            password: 'SuperSecretPassword!'
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.include('Welcome to the Secure Area. When you are done click logout below.');
    });
    cy.getCookie('rack.session').should('exist');
    cy.visit('https://the-internet.herokuapp.com/secure');
});

Cypress.Commands.add('visitInSameTab', (url) => {
    cy.on('window:before:load', (win) => {
        win.open(url, '_self');
    });
});

Cypress.Commands.add('visitInSameTab2', (url) => {
    cy.on('window:before:load', (win) => {
        cy.stub(win, 'open').as('openWindow').callsFake(() => {
            cy.visit(url);
        });
    });
});
