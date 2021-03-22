describe('The Posts Page', () => {
    it('successfully loads', () => {
      cy.visit('#/posts')
    
      cy.contains('Latest Posts')   
        
      cy.url().should('include', '/posts')
    })
  })