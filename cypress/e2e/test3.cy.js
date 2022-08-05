describe('Teste formulário adição', () => {
  it('Teste de adição de Criança', () => {

    cy.visit('http://localhost:3000/PermanenciaHome');

    cy.intercept('POST', '**/permanence').as('createPermanence');

    cy.get('[id=nome]').type('8');
    cy.get('[id=cpfrg]').type('1');
    cy.get('[data-cy=dataEntry]').type('2001-01-01');
    cy.get('[id=descricao]').type('Entrou com um brinquedo');
    cy.get('[data-cy=buttonPermanence]').click();
    
    cy.wait('@createPermanence').its('response.statusCode').should('eq', 201);

  })
})