describe("Validaciones implicitas y explicitas", () => {
    
    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/')
    });
    it('Validaciones Implicita', () => {
        cy .contains('Inputs').click()
        cy.get("h3").should('have.text','Inputs').and('be.visible')
    }); 
    it('Validaciones Explicita', () => {
        cy .contains('Inputs').click()
        
        expect("Inputs").to.equals("Inputs")
    });
    it('Espera que las promesas se resuelvan', () => {
        let waited = false
        function waitOneSecond(){
            //Devuelve una promesa que se da por resuelta despues de un segundo
            return new Cypress.Promise((resolve, reject) => {
                setTimeout(() => {
                   //Ponemos el waited en true para saber que la promesa se ha resuelto
                    waited = true
                    //Resolvemos la promesa con el string foo
                    resolve("foo")
                }, 1000)
            })
        }  
        //Llamamos a la funcion que devuelve una promesa
        cy.wrap(null).then(() => { 
            //Comprobamos que waited es false
            return waitOneSecond().then((str) => {
                //Comprobamos que la promesa se ha resuelto
                expect(waited).to.be.true
                //Comprobamos que el string que nos ha devuelto la promesa es foo
                expect(str).to.equal("foo")
            })
        })   
    });
});
/*expect se puede utilizar en cualquier tipo de prueba y para hacer aserciones sobre cualquier tipo de valor este viene de la librería Chai,
mientras que should se utiliza específicamente en pruebas de Cypress y para hacer aserciones sobre los valores 
que se obtienen de los comandos de Cypress.*/