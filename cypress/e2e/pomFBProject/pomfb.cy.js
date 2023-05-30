import { LoginPage } from "./login_fb"
const loginPage = new LoginPage()
it('fb-login', () => {
    cy.visit('https://www.facebook.com/')
    cy.get('.fcb > a').click()
         loginPage.enterUsername('varyfaha@givmail.com')
         loginPage.enterPassword('Ramzan12345678')
         loginPage.clickLogin()
   // cy.get('[data-testid="royal_email"]').type('varyfaha@givmail.com')
   // cy.get('[data-testid="royal_pass"]').type('Ramzan12345678')
   // cy.get('[data-testid="royal_login_button"]').click()   
})