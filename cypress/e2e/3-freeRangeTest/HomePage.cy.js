describe('Home de www.freerangetesters.com' , () => {
    beforeEach(() => { // Esto se ejecuta despues de cada test
        cy.visit('https://www.freerangetesters.com/')
    })
    it('Verificar el titulo', () => {
        cy.title().should('eq','Free Range Testers')
        //cy.xpath('//*[@id="page_header"]/div/section/div/header/nav/ul/li[3]/a').click()
        //cy.contains('Entrar').click()
        //you can also use ':' for filtering like ":disable" for example
    })
    it('Hay 9 cursos para ver cursos', () => {
        cy.get('[data-testid="header-container"] > .sc-Gqece > .sc-dQpIV > :nth-child(1) > .sc-iqHXzD').click()
        cy.get('.sc-iktFSN > .sc-jJEJze > .sc-hiSaRn > .sc-gWHiUp > .sc-hHftZz').should('have.length',9)
    })

})