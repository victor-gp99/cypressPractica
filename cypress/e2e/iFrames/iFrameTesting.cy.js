describe('iFrame Testing', () => {

    it('Valido el texto de un elemento dentro de un iframe', () => {
        cy.visit('https://webdriveruniversity.com/IFrame/index.html');
        cy.get('#frame').iframe('body #button-find-out-more > b').should('contain', 'Find Out More!');
    });
});