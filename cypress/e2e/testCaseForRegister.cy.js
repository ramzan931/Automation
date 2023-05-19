it('Assertion Demo', () => {
    cy.visit('https://iftradi.com/login')
    cy.get('.d-sm-inline-block').click()
    cy.get('.dropdown-menu > :nth-child(1)').click()
    cy.get(':nth-child(1) > .btn').click()
    cy.get('#firstName').type('ramzan')
    cy.get('#lastName').type('ahmad')
    cy.get('#email').type('ramzan.ahmad@invozone.com')
    cy.get('.input').click()
    cy.get('#password').type('Ramzan@1218')
    cy.get('#confirmPassword').type('Ramzan@1218')
    cy.get('.btn > .ml-50').click()
  

  })
  