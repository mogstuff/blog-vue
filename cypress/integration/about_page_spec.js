describe('The About Page', () => {
    it('successfully loads', () => {
      cy.visit('#/about')
    
      cy.contains('About The Food Dude')
      
      cy.url().should('include', '/about')
    })
  })