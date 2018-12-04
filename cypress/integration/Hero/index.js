/// <reference types="Cypress" />

context('Hero', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Loads', () => {
    cy.get('[data-cy=logo]').should('be.visible')
    cy.get('[data-cy=hero]').should('exist')
    cy.get('[data-cy=arrow]').click()
    cy.get('[data-cy=hero]').should('not.be.visible')
    cy.get('[data-cy=logo]').should('not.be.visible')
  })
})
