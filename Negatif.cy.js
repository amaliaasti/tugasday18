describe('E2E Login to inventory', () => {

  it('input valid username dan password then Login', () => {

    cy.visit('https://the-internet.herokuapp.com/login')

    cy.get('#user-name').type("aaaaa")

    cy.get('#password').type("bbbbb")

    cy.contains("LOGIN").click()

  })

})