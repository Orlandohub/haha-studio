/// <reference types="Cypress" />

context('Hero', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Loads', () => {
    cy.get('[data-cy=hero]')
      .should('exist') 
  })
  
  it('clicks an arrow', () => {
    
    cy.get('[data-cy=arrow]',{ delay: 4000 }).click()
     
  })
  
})
