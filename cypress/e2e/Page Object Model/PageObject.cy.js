import FreeRangeHome from "../../pages/FreeRAngeHome";
const freerangeHome = new FreeRangeHome()
describe('Ejemplo de POM en la web FreeRangeTesters' , () => {
    
    beforeEach(() => { // Esto se ejecuta despues de cada test
        freerangeHome.navigate()
    })
    it('Activar descuento existe', () => {
        freerangeHome.startButton().should('exist')
    });
});