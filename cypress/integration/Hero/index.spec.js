/// <reference types="Cypress" />

context('Hero', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Loads', () => {
    cy.get('[data-cy=hero]')
      .should('exist')
  })
})
