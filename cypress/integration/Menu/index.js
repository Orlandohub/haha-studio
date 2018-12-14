/// <reference types="Cypress" />

context('Navigation selectors test', () => {
  /*beforeEach(() => {
    
  })*/

  it('Finds navigation contents, verifies hyperlinks and absence of unwanted elements', () => {
    cy.visit('/selected/')
    cy.contains('projects').click()
    cy.contains('selected')
    cy.contains('archived').click()
    cy.url().should('include', '/archived/')
    cy.contains(
      'about' & 'exploration' & 'texts' & 'find us' & 'press' & 'retailers'
    ).should('not.be.visible')

    cy.get('[data-cy=studio]').click()
    cy.url().should('include', '/about/')
    cy.contains('about')
    cy.contains('exploration').click()
    cy.url().should('include', '/exploration/')
    cy.contains('exploration')
    cy.contains('texts').click()
    cy.url().should('include', '/texts/')
    cy.contains(
      'selected' & 'archived' & 'find us' & 'press' & 'retailers'
    ).should('not.be.visible')

    cy.contains('contact').click()
    cy.url().should('include', '/find-us/')
    cy.contains('find us')
    cy.contains('press').click()
    cy.url().should('include', '/press/')
    cy.contains('retailers').click()
    cy.url().should('include', '/retailers/')
    cy.contains(
      'selected' & 'archived' & 'about' & 'exploration' & 'texts'
    ).should('not.be.visible')

    cy.contains('shop').click()
    cy.url().should('include', '/shop/')
    cy.contains(
      'selected' &
        'archived' &
        'about' &
        'exploration' &
        'texts' &
        'find us' &
        'press' &
        'retailers'
    ).should('not.be.visible')

    cy.get('[data-cy=logo]').click()
    cy.url().should('include', '/selected/')
  })
})
