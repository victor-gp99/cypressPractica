class FreeRangeHome{
    navigate(){
        cy.visit('https://www.freerangetesters.com/')
    }
    startButton(){
        return cy.get('[data-testid="grid-header"] > .sc-gWHiUp > .sc-dOSSlk > .sc-bBrOHt > .sc-hHftZz')
    }
}
export default FreeRangeHome