describe('The Post Page', () => {
    it('successfully loads', () => {
      cy.visit('#/post')
    
      cy.contains('Spaghetti carbonara')   
        
      cy.url().should('include', '/post')
    })
  })