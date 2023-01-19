describe('E2E Login ', () => {

  it('input valid username dan password then Login', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#username').type("tomsmith")

    cy.get('#password').type("SuperSecretPassword!")

    cy.get('.fa').click()
  })

})
