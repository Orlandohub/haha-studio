/// <reference types="Cypress" />

context('Hero', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Loads', () => {
    cy.get('picture').should('exist')
    cy.get('[data-cy=hero]').should('exist')
    cy.wait(7000)
    cy.get('[data-cy=arrow]').click()
    cy.wait(3000)
    cy.get('[data-cy=hero]').should('not.be.visible')
    cy.get('picture').should('not.be.visible')
  })
})
