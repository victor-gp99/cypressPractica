describe('Tablas estaticas y dinamicas', () => {
/*   it('Tabla estatica', () => {
        cy.visit('http://sqengineer.com/practice-sites/practice-tables-selenium/')
           //Ubicamos la primera columna de la tabla y la recorremos
        cy.get('#table1 > tbody > tr > td:nth-child(1)').each(($el, index, $list) => {
            //Obtenemos el texto de cada elemento de la columna ubicada anteriormente  
            const text = $el.text();
            //Comprobamos que el texto de cada elemento de la columna sea Ranorex
                if(text.includes('Ranorex')){
                    //Si el texto es Ranorex, comprobamos que el texto de la siguiente columna sea Commercial
                    cy.get('#table1 > tbody > tr > td:nth-child(1)').eq(index).next().then((p) => {
                        const pText = p.text()
                        expect(pText).to.equal('Commercial')
                    })
                }
            })
        }) */
    it('Tabla dinamica', () => { //Tambien se puede hacer con tablas estaticas
        cy.visit('https://chercher.tech/practice/dynamic-table')
        cy.contains('td','facebook').prev().find("input").check()
    })
})