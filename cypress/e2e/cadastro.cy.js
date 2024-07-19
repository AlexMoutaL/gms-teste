/// <reference types= "cypress"/>


describe('US - 012-Funcionalidade: Cadastro de membros', () => {
  beforeEach( () => {
    cy.visit('/')
  });

  it('Validar falha ao fazer o cadastro', () => {
    var email = `alex${Date.now()}@teste.com`
    cy.preencherCadastro('Alex', 'Mouta', email, '92991726749', 'Teste@12345')
    cy.get('#signup-response').should('contain' , 'Failed to fetch')
  })

})