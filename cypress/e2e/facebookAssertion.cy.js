describe('Facebook Sign-up', () => {
    it('Test case for Sign-up', () => {
      // Visit the Facebook homepage
      cy.visit('https://www.facebook.com/')
      cy.url().should('eq','https://www.facebook.com/')
      cy.get('.fcb > a').click()
      cy.get('[data-testid="open-registration-form-button"]').click()
      cy.contains('Create new account').should ('contain','Create new account')
      
      // Fill in the sign-up form
//first name field should be visible
cy.get('[name="firstname"]').type('Ramzan Ahmad').should('be.visible')
//last name value should have sardar
cy.get('[name="lastname"]').type('Sardar').should('have.value', 'Sardar')
cy.get('[name="reg_email__"]').type('varyfaha@givmail.com')
//value must be same
cy.get('[name="reg_email_confirmation__"]').type('varyfaha@givmail.com').should('have.value','varyfaha@givmail.com')

cy.get('[name="reg_passwd__"]').type('Ramzan12345678')
// Select date of birth

cy.get('[name="birthday_day"]').select('1')

cy.get('[name="birthday_month"]').select('Jan')

cy.get('[name="birthday_year"]').select('1990')

// Select gender

cy.get('[name="sex"]').check('2') // Assuming 2 represents the option for male

// Click on the sign-up button
cy.get('[name="websubmit"]').click()
cy.contains('Sign Up').should ('contain','Sign Up')
    })})