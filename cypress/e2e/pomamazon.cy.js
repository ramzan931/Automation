//import { LoginPage } from "./PagesAmazon/loginpage";
import { LoginPage } from './pages/login_page'
//var replace with cont (variable)
const loginPage = new LoginPage();

it('POM Amazon', function() {
    const url='https://www.amazon.com/ap/signin'
  cy.visit('https://www.amazon.com/');

  //loginPage.enterUsername();
  //loginPage.clickContinue();
 // loginPage.enterPassword();
 // loginPage.clickLoginPage();

 cy.get('#nav-link-accountList-nav-line-1').click()
 cy.get('#ap_email').type('ramzan.ahmad@invozone.com')
 cy.get('.a-button-inner > #continue').click()
 cy.get('#ap_password').type('Ramzan12345678')
 cy.get('#signInSubmit').click()

})