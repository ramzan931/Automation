
export class LoginPage {

    enterUsername() {

        cy.get('#ap_email').type('ramzan.ahmad@invozone.com')

    }

    clickContinue(){
        cy.get('.a-button-inner > #continue').click()


    }

    enterPassword() {

        cy.get('#ap_password').type('Ramzan12345678')

    }

    clickLoginPage() {

    cy.get('#signInSubmit').click()


    }
}
