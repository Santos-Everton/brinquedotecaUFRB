//<reference types="cypress"/>

describe('Primeiro Teste no Cypress', () => {

    it('Teste básico de rota', () => {
             
        cy.visit('http://localhost:3000/Criancas');
        cy.intercept('GET', '**/children').as('getCriancas');

        cy.wait('@getCriancas').its('response.statusCode').should('eq', 304)

        //Documentação: https://docs.cypress.io/api/commands/intercept#Waiting-on-a-request
        //              https://docs.cypress.io/guides/references/assertions
        //              https://docs.cypress.io/api/commands/intercept#Arguments
        //              https://docs.cypress.io/guides/guides/network-requests#Command-Log

    })
    
    /*
    it('Hello World dos Testes', () => {

        cy.visit('http://localhost:3000/Criancas');    
        cy.get('button[type=submit]');

    })
    
    it('Teste básico do Cypress', () => {
        expect(2).to.equal(2)
    })
    */
})