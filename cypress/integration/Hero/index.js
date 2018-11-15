/// <reference types="Cypress" />

context('Hero', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Loads', () => {
    cy.get('[data-cy=hero]')
      .should('exist')
  })

  it('Hides on arrow click', () => {
    cy.get('[data-cy=arrow]', {timeout: 10000})
      .click()
    cy.get('[data-cy=hero]')
      .should('not.be.visible')
  })
})
