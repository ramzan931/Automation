
export class LoginPage {
    username_textbox = 'data-testid="royal_email'
    username_textbox = 'data-testid="royal_pass'
    login_button = 'data-testid="royal_login_button'
    
    enterUsername(username){
        cy.get('[data-testid="royal_email"]').type('username')
    }
    enterPassword(password){
        cy.get('[data-testid="royal_pass"]').type('password')

    }
clickLogin(){
    cy.get('[data-testid="royal_login_button"]').click()   

}

}