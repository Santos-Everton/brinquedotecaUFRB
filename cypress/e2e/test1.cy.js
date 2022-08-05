describe('Teste formulário adição', () => {
  it('Teste de adição de Criança', () => {

    cy.visit('http://localhost:3000/Criancas');

    cy.get('[data-cy=buttonCrianca]').click();

    cy.intercept('POST', '**/children').as('createCrianca');

    cy.get('[id=nome]').type('felipe');
    cy.get('[id=cpfrg]').type('676767');
    cy.get('[id=dataNascimento]').type('2001-01-01');
    cy.get('[id=endereco]').type('rua b');
    cy.get('[data-cy=buttonSalvar]').click();
    
    cy.wait('@createCrianca').its('response.statusCode').should('eq', 201);

  })
})