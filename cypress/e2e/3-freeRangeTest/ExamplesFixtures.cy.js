describe('ExamplesFixtures', function() {
    before(function() {
        cy.visit('https://the-internet.herokuapp.com/login')
        cy.fixture('credenciales').then(function(data){
            this.data = data
        })
    })

    it('Validate successful Login', function() {
        cy.get('#username').type(this.data.username)
        cy.get('#password').type(this.data.password)
        cy.get('form').contains('Login').click()
        cy.url().should('include', '/secure')
    });
});