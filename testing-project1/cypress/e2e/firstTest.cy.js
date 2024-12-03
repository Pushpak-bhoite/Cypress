describe('Registration Form', () => {
  
  // This hook runs before each test case to ensure we're starting with a fresh page
  beforeEach(() => {
    cy.visit('http://localhost:5173/') // Visit the registration form page
  })



  // Test case to check if the registration form is visible
  it('displays the registration form', () => {
    cy.get('.registration-form-container').should('be.visible') // Check if the form container is visible
    cy.get('[data-cy=name-input]').should('be.visible') // Ensure the name input field is visible
    cy.get('[data-cy=email-input]').should('be.visible') // Ensure the email input field is visible
    cy.get('[data-cy=password-input]').should('be.visible') // Ensure the password input field is visible
    cy.get('[data-cy=submit-button]').should('be.visible') // Ensure the submit button is visible
  })

  // Test case to ensure users can enter data into the registration form
  it('allows entering registration information', () => {
    cy.get('[data-cy=name-input]').type('John Doe') // Type into the name input field
    cy.get('[data-cy=email-input]').type('john@example.com') // Type into the email input field
    cy.get('[data-cy=password-input]').type('password123') // Type into the password input field

    // Verify that the inputs have the correct values after typing
    cy.get('[data-cy=name-input]').should('have.value', 'John Doe')
    cy.get('[data-cy=email-input]').should('have.value', 'john@example.com')
    cy.get('[data-cy=password-input]').should('have.value', 'password123')
  })

  // Test case to check form submission with valid data
  it('submits the form with valid data', () => {
    cy.get('[data-cy=name-input]').type('Jane Smith') // Type name in the input field
    cy.get('[data-cy=email-input]').type('jane@example.com') // Type email in the input field
    cy.get('[data-cy=password-input]').type('securepass') // Type password in the input field

    cy.get('form').submit() // Submit the form

    // After submission, check that the form fields are cleared
    cy.get('[data-cy=name-input]').should('have.value', '')
    cy.get('[data-cy=email-input]').should('have.value', '')
    cy.get('[data-cy=password-input]').should('have.value', '')
  })

  // Test case to verify that all fields are required and validate HTML5 constraints
  it('requires all fields to be filled', () => {
    cy.get('[data-cy=submit-button]').click() // Try submitting the form without filling in any fields

    // Check for HTML5 validation messages for each field
    cy.get('[data-cy=name-input]').then($el => {
      expect($el[0].validationMessage).to.not.be.empty // Ensure there's a validation message for the name field
    })
    cy.get('[data-cy=email-input]').then($el => {
      expect($el[0].validationMessage).to.not.be.empty // Ensure there's a validation message for the email field
    })
    cy.get('[data-cy=password-input]').then($el => {
      expect($el[0].validationMessage).to.not.be.empty // Ensure there's a validation message for the password field
    })
  })
//
  it('takes a screenshot', () => {
    cy.screenshot()
  })
  

})


// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })