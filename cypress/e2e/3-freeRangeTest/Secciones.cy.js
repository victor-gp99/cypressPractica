/*
Tipos de dobles de prueba (objeto o precedimiento que simula el comportamiento de un objeto o procedimiento real).
-Mock: Imagina que estás haciendo una obra de teatro y necesitas a un actor que haga el papel de un rey.
Pero en lugar de actuar, este “rey” solo necesita decir si las otras personas están diciendo sus líneas correctamente.
Eso es un mock. Se utiliza para comprobar el “flujo” o el orden de las operaciones.
-Stub: Ahora, imagina que estás ensayando para la obra de teatro y necesitas practicar tu diálogo con el “rey”.
Pero el actor que hace de rey no está disponible, así que usas un sustituto que solo dice las líneas del rey. 
No importa cómo lo haga, solo necesitas que diga las líneas para que puedas practicar tu parte. Eso es un stub.
Se utiliza para comprobar la “funcionalidad” o el resultado de las operaciones.
-Spy: Imagina que estás en una misión secreta y necesitas a alguien que observe al “rey” y te informe de todas sus acciones.
Eso es un spy. Un spy permite que la entidad duplicada conserve su comportamiento original al tiempo que proporciona información
sobre cómo interactuó con el código bajo prueba. El spy puede decirle a la prueba qué parámetros se le dieron, cuántas veces se 
llamó y cuál fue el valor de retorno, si lo hubo.
-Dummy: Imagina que estás probando la seguridad de los coches y necesitas un maniquí que se siente en el asiento del conductor 
para simular a una persona real durante las pruebas de choque. Eso es un dummy. En las pruebas de software, un dummy es un objeto
que se pasa alrededor pero nunca se usa realmente. Normalmente se utilizan para llenar los parámetros de las listas de métodos.
*/

const testData = require('../../fixtures/titulos.json');

testData.forEach((testData) => {
    describe('El titulo es el correcto para cada subpagina en Free Range Testers', () => {
        it('Valida que' + testData.Title + 'sea el titulo de' + testData.Location , () => {
            /*cy.intercept('GET', {
                statusCode:500,
                body:{
                    nombre: 'Esto es stubbed'
                }
            })*/
            /* cy.intercept('GET', (req)=>{
                //hacemos algo con la response 
                req.headers['user-agent'] = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko)'
                return true
            })*/
            cy.visit(testData.Location);
            cy.title().should('include', testData.Title);
        });
    });
});