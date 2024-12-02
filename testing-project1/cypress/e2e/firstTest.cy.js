describe('template spec', () => {
  it('should validate the text,is the text present or is it right text ', () => {
    cy.visit('http://localhost:5173/')

    cy.get('[data-testid="cypress-title"]').should('exist')
    .should('have.text', 'Hello world')

    cy.get('[data-cy="submit"]').click()
  })

})