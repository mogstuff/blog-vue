describe('The Home Page', () => {
    it('successfully loads', () => {
      cy.visit('/')
    
      cy.contains('The Food Dude')

      cy.get('.latest-recipes').contains('Latest Recipes');
        
      

    })
  })