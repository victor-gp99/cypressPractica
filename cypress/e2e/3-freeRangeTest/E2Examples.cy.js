describe('Ejemplos de E2E - Loggear', () => {
    
    /* beforeEach(() => {
        cy.task("db:teardown"); //borro la base de datos
        cy.task("db:seed"); //creo la base de datos
    });*/
    
    it('Sin Loggear', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth');
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.');
    });
    it('Loggear con Auth de Cypress', () => {
        cy.visit('https://the-internet.herokuapp.com/basic_auth', {
            auth: {
                username: 'admin',
                password: 'admin'
            }
        });
        cy.get('p').should('contain', 'Congratulations! You must have the proper credentials.');
    });

    it('Loggear con credenciales en la URL de visit', () => {
        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    });

    it('Hago login en un form, usando request del tipo POST', () => {
        cy.visit('https://the-internet.herokuapp.com/login');
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
        cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
    });

    it('Logeando con comando personalizado con el text de arriba', () => {
        cy.login();
        cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
    });
});