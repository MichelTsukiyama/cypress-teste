const code = Cypress.env('CODE');
describe('Teste function 1', () => {
  it('validar retorno', () => {
    cy.GetFunction1(`https://mts-teste.azurewebsites.net/api/Function1?code=${code}`, "Michel")
  })
})