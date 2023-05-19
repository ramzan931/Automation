export class LoginPage {
  username_textbox=':nth-child(1) > .form-control'
  password_textbox=':nth-child(2) > .form-control'
  login_button=':nth-child(2) > .btn'

enterUsername(Username){
    cy.get(this.username_textbox).type(Username)
}
enterPassword(Password){
    cy.get(this.password_textbox).type(Password)
}
clickLogin(){
    cy.get(this.login_button).click()
}
}