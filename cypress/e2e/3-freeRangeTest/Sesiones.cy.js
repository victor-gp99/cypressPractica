/**
 * @description Pruebas relacionadas con sesiones y cookies.
 */
describe('Sesiones y cookies', () => {

    /**
     * @description Prueba sin sesión guardada.
     */
/* it('Sin sesion guardada', () => {
        cy.visit('http://the-internet.herokuapp.com/login')
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('form').contains('Login').click()
        cy.url().should('include', '/secure')
    }); */

    /**
     * @description Prueba con sesión guardada.
     */
    it('Con sesion guardada', () => {
        cy.session('sessionTom', () => { //Guardamos la sesion con el nombre sessionTom para poder recuperarla posteriormente
            cy.visit('http://the-internet.herokuapp.com/login')
            cy.get('#username').type('tomsmith')
            cy.get('#password').type('SuperSecretPassword!')
            cy.get('form').contains('Login').click()
            cy.url().should('include', '/secure')
            //obtenemos la cookie de sesion
            cy.getCookies().should('have.length', 5).then((cookies) => {
                //obtenemos la primera cookie con el nombre optimizelyPendingLogEvents
                expect(cookies[0]).to.have.property('name', 'optimizelyPendingLogEvents')
            })
            //borramos las cookies de sesion
            cy.clearCookies()
            //comprobamos que se han borrado las cookies
            cy.getCookies().should('have.length', 5)
            //recuperamos la cookie de sesion
            cy.getCookie('optimizelyPendingLogEvents').should('not.have.property', 'value', '%5B%22n%3Dhttp%253A%252F%252Fthe-internet.herokuapp.com%252Fsecure%26u%3Doeu1704318520637r0.40461902623569257%26wxhr%3Dtrue%26t%3D1704318521828%26f%3D298349752%2C318188263%22%2C%22n%3Dengagement%26g%3D298283957%26u%3Doeu1704318520637r0.40461902623569257%26wxhr%3Dtrue%26t%3D1704318520805%26f%3D298349752%2C318188263%22%2C%22n%3Dhttp%253A%252F%252Fthe-internet.herokuapp.com%252Flogin%26u%3Doeu1704318520637r0.40461902623569257%26wxhr%3Dtrue%26t%3D1704318520645%26f%3D298349752%2C318188263%22%5D')
            cy.getCookie('optimizelyPendingLogEvents').should('exist')
            cy.clearCookie('optimizelyPendingLogEvents')
            cy.getCookie('Cookieloca').should('not.exist') //Comprobamos que no existe la cookie Cookieloca
            cy.setCookie('Cookieloca','Oreo'); //Establecemos una cookie nueva con el nombre Cookieloca y el valor Oreo
            cy.getCookie('Cookieloca').should('have.property','value', 'Oreo') //Comprobamos que la cookie Cookieloca tiene el valor Oreo

        })
    });
});