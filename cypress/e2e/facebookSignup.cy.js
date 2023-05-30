describe('Facebook Sign-up', () => {
    it('Test case 1 with blank user name', () => {
      // Visit the Facebook homepage
      cy.visit('https://www.facebook.com/')
      cy.get('.fcb > a').click()
      cy.get('[data-testid="open-registration-form-button"]').click()
      
      // Fill in the sign-up form
      cy.get('[name="firstname"]').type('')
      cy.get('[name="lastname"]').type('')
      cy.get('[name="reg_email__"]').type('varyfaha@givmail.com')
      cy.get('[name="reg_email_confirmation__"]').type('varyfaha@givmail.com')
      cy.get('[name="reg_passwd__"]').type('Ramzan12345678')
  
      // Select date of birth
      cy.get('[name="birthday_day"]').select('1')
      cy.get('[name="birthday_month"]').select('Jan')
      cy.get('[name="birthday_year"]').select('1990')
  
      // Select gender
      cy.get('[name="sex"]').check('2') // Assuming 2 represents the option for male
  
      // Click on the sign-up button
      cy.get('[name="websubmit"]').click()
  
    });

    it('test case 2 with blank password', () => {
      // Visit the Facebook homepage
      cy.visit('https://www.facebook.com/')
      cy.get('.fcb > a').click()
      cy.get('[data-testid="open-registration-form-button"]').click()
      
      // Fill in the sign-up form
      cy.get('[name="firstname"]').type('Ramzan')
      cy.get('[name="lastname"]').type('Ahmad')
      cy.get('[name="reg_email__"]').type('varyfaha@givmail.com')
      cy.get('[name="reg_email_confirmation__"]').type('varyfaha@givmail.com')
      cy.get('[name="reg_passwd__"]').type('')
  
      // Select date of birth
      cy.get('[name="birthday_day"]').select('1')
      cy.get('[name="birthday_month"]').select('Jan')
      cy.get('[name="birthday_year"]').select('1990')
  
      // Select gender
      cy.get('[name="sex"]').check('2') // Assuming 2 represents the option for male
  
      // Click on the sign-up button
      cy.get('[name="websubmit"]').click()
  
    });

    it('test case 3 with blank email', () => {
      // Visit the Facebook homepage
      cy.visit('https://www.facebook.com/')
      cy.get('.fcb > a').click()
      cy.get('[data-testid="open-registration-form-button"]').click()
      
      // Fill in the sign-up form
      cy.get('[name="firstname"]').type('Ramzan')
      cy.get('[name="lastname"]').type('Ahmad')
      cy.get('[name="reg_email__"]').type('')
      cy.get('[name="reg_email_confirmation__"]').type('')
      cy.get('[name="reg_passwd__"]').type('Ramzan12345678')
  
      // Select date of birth
      cy.get('[name="birthday_day"]').select('1')
      cy.get('[name="birthday_month"]').select('Jan')
      cy.get('[name="birthday_year"]').select('1990')
  
      // Select gender
      cy.get('[name="sex"]').check('2') // Assuming 2 represents the option for male
  
      // Click on the sign-up button
      cy.get('[name="websubmit"]').click()
  
    });

    it('Should navigate to the sign-up page and fill in the form', () => {
      // Visit the Facebook homepage
      cy.visit('https://www.facebook.com/')
      cy.get('.fcb > a').click()
      cy.get('[data-testid="open-registration-form-button"]').click()
      
      // Fill in the sign-up form
      cy.get('[name="firstname"]').type('Ramzan')
      cy.get('[name="lastname"]').type('Ahmad')
      cy.get('[name="reg_email__"]').type('varyfaha@givmail.com')
      cy.get('[name="reg_email_confirmation__"]').type('varyfaha@givmail.com')
      cy.get('[name="reg_passwd__"]').type('Ramzan12345678')
  
      // Select date of birth
      cy.get('[name="birthday_day"]').select('1')
      cy.get('[name="birthday_month"]').select('Jan')
      cy.get('[name="birthday_year"]').select('1990')
  
      // Select gender
      cy.get('[name="sex"]').check('2') // Assuming 2 represents the option for male
  
      // Click on the sign-up button
      cy.get('[name="websubmit"]').click()
  
    });
  });



