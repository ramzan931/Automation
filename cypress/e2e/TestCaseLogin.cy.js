it('Login test Case', () => {
    cy.visit('https://iftradi.com/login')
    cy.get('.d-sm-inline-block').click()
    cy.get('.dropdown-menu > :nth-child(1)').click()
    cy.get('.btn > .ml-50')
    cy.get(':nth-child(1) > .form-control').type('ramzan.ahmad@invozone.com')
    cy.get(':nth-child(2) > .form-control').type('Ramzan@1218')
    cy.get('.btn > .ml-50').click()
})