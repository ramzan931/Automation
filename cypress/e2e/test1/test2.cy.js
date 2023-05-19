
/// <reference types="cypress" />

it('Dummy Login', () => {
    cy.visit('https://www.testyou.in/Login.aspx')
    cy.get('#ctl00_CPHContainer_txtUserLogin').type('ramzanahmad931@gmail.com')
    cy.get('#ctl00_CPHContainer_txtPassword').type('12345678{Enter}')
   // cy.contains('Login').click()
  })
  