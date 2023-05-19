it('Assertion Demo', () => {
    cy.visit('https://iftradi.com/login')
    cy.get('.d-sm-inline-block').click()
    cy.get('.dropdown-menu > :nth-child(1)').click()
    cy.get('.btn > .ml-50')
    cy.get(':nth-child(1) > .form-control').type('ramzan.ahmad@invozone.com')
    cy.get(':nth-child(2) > .form-control').type('Ramzan@1218')
    // cy.wait(2000)
    cy.get('.btn > .ml-50').should('contain','Login')
    .should('be.visible')
    
   //.should('be.disabled')
   //.should('be.enabled')
   //OR
   //and('be.enabled')
   expect(true).to.be.true
   assert.equal(4, 4 ,'NOT EQUAL')


})