describe('Pruebas de APIs', () => {
    it('El endpoint posts responde con status 200', () => {
        cy.request({
            url:'https://jsonplaceholder.typicode.com/posts/'
        }).then((response) => {
            expect(response.status).to.eq(200)
            cy.wrap(response.status).should('eq', 200);
            //Aquí, cy.wrap se utiliza para convertir el estado de la respuesta en un objeto que Cypress puede trabajar y poder encadenar should 
            //para hacer una aserción sobre el valor ya que sin este wrapper, no se podría encadenar should por ser un valor, no un comando de cypress.
            expect(response.body).to.have.length(100)
            expect(response.body[0]).to.have.property('userId')
            expect(response.body[2]).to.have.property('title', 'ea molestias quasi exercitationem repellat qui ipsa sit aut')
            expect(response).to.have.property('headers')
            expect(response).to.have.property('duration')
            expect(response).to.have.property('statusText')
            expect(response).to.have.property('body')
        });
    });

    it('El endpoint posts tiene 100 entradas', () => {
        cy.visit('https://jsonplaceholder.typicode.com')
        cy.request('/posts').its('body').should('have.length', 100)
        cy.request('/posts').its('headers').its('content-type').should('include', 'application/json')
        cy.request('/posts').its('headers').should('include', {
            'content-type': 'application/json; charset=utf-8'
        })
        cy.request('/posts/1').its('body').should('have.property', 'userId', 1)
        cy.request('/posts/1').its('body').should('include', {
            userId: 1,
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
        })
    });

    it('El post request funciona perfectamnete para el endpoint', () => {
        cy.request('POST', 'https://jsonplaceholder.typicode.com/posts', {
            userId: 1,
            id:1,
            title: 'Mi titulo',
            body: 'Mi cuerpo'
        }).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('userId', 1)
            expect(response.body).to.have.property('id', 1)
            expect(response.body).to.have.property('title', 'Mi titulo')
            expect(response.body).to.have.property('body', 'Mi cuerpo')
        });
    });
//la diferencia entre el post y el put es que el post crea un recurso nuevo y el put actualiza un recurso existente
//put es un idempotente, es decir, que si se ejecuta varias veces, el resultado es el mismo
//en cambio con post, si se ejecuta varias veces, se crean varios recursos
    it('El PUT request funciona correctamente para el endpoint1', () => {
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/posts/1', { 
            userId: 1,
            id: 1,
            title: 'Mi titulo',
            body: 'Mi cuerpo'
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.have.property('userId', 1)
            expect(response.body).to.have.property('id', 1)
            expect(response.body).to.have.property('title', 'Mi titulo')
            expect(response.body).to.have.property('body', 'Mi cuerpo')
        });
    });
    it('El DELETE request funciona correctamente en el endpoint', () => {
        cy.request('DELETE', 'https://jsonplaceholder.typicode.com/posts/1').then((response) => {
            expect(response.status).to.eq(200)
        });
    });

    it('Simula una solicitud GET a /posts con stub', () => {
        //datos falsos para simular la respuesta del server
        const fakePosts = [{ userId: 1, id: 1, title: 'Mi titulo', body: 'Mi cuerpo' }]
        //stub para simular la respuesta del server
        cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', fakePosts).as('getPosts')
        //visitamos la pagina para hacer la solicitud a la API
        cy.visit('https://jsonplaceholder.typicode.com')
        //esperamos a que la solicitud se complete
        cy.wait('@getPosts').its('response.statusCode').should('eq', 200)
        //Realizamos las aserciones necesarias en la interfaz de usuario utilizando los datos falsos
        cy.get('body').should('contain', 'Mi titulo')
    });
});