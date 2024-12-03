describe('Registration Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/') // Assuming the form is on the form route
  })

  it('displays the registration form', () => {
    cy.get('.registration-form-container').should('be.visible')
    cy.get('[data-cy=name-input]').should('be.visible')
    cy.get('[data-cy=email-input]').should('be.visible')
    cy.get('[data-cy=password-input]').should('be.visible')
    cy.get('[data-cy=submit-button]').should('be.visible')
  })

  it('allows entering registration information', () => {
    cy.get('[data-cy=name-input]').type('John Doe')
    cy.get('[data-cy=email-input]').type('john@example.com')
    cy.get('[data-cy=password-input]').type('password123')

    cy.get('[data-cy=name-input]').should('have.value', 'John Doe')
    cy.get('[data-cy=email-input]').should('have.value', 'john@example.com')
    cy.get('[data-cy=password-input]').should('have.value', 'password123')
  })

  it('submits the form with valid data', () => {
    cy.get('[data-cy=name-input]').type('Jane Smith')
    cy.get('[data-cy=email-input]').type('jane@example.com')
    cy.get('[data-cy=password-input]').type('securepass')

    cy.get('form').submit()

    // Here you would typically assert on the result of the form submission
    // For this example, we'll just check that the form fields are cleared
    cy.get('[data-cy=name-input]').should('have.value', '')
    cy.get('[data-cy=email-input]').should('have.value', '')
    cy.get('[data-cy=password-input]').should('have.value', '')
  })

  it('requires all fields to be filled', () => {
    cy.get('[data-cy=submit-button]').click()

    // Check for HTML5 validation messages
    cy.get('[data-cy=name-input]').then($el => {
      expect($el[0].validationMessage).to.not.be.empty
    })
    cy.get('[data-cy=email-input]').then($el => {
      expect($el[0].validationMessage).to.not.be.empty
    })
    cy.get('[data-cy=password-input]').then($el => {
      expect($el[0].validationMessage).to.not.be.empty
    })
  })
})

