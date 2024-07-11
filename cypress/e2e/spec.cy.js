/// <reference types= "cypress"/>

describe('US - 012-Funcionalidade: Cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Alex")
    cy.get('#signup-lastname').type("Mouta")
    cy.get('#signup-email').type("alex2@teste.com")
    cy.get('#signup-phone').type('92991716948')
    cy.get('#signup-password').type('Lamarao@1995')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')
  })
})