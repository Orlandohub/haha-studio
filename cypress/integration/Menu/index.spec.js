/// <reference types="Cypress" />

context('Navigation selectors test', () => {
  /*beforeEach(() => {
    
  })*/

  it('Finds navigation contents, verifies hyperlinks and absence of unwanted elements', () => {
    cy.visit('/selected/')
    cy.contains('projects').click({force: true})
    cy.contains('selected')
    cy.contains('archived').click({force: true})
    cy.url().should('include', '/archived/')
    cy.contains(
      'about' & 'exploration' & 'texts' & 'find us' & 'press' & 'retailers'
    ).should('not.be.visible')

    cy.get('[data-cy=studio]').click({force: true})
    cy.url().should('include', '/about/')
    cy.contains('about')
    cy.contains('exploration').click({force: true})
    cy.url().should('include', '/exploration/')
    cy.contains('exploration')
    cy.contains('texts').click({force: true})
    cy.url().should('include', '/texts/')
    cy.contains(
      'selected' & 'archived' & 'find us' & 'press' & 'retailers'
    ).should('not.be.visible')

    cy.get('[data-cy=contact]').click({force: true})
    cy.url().should('include', '/find-us/')
    cy.contains('find us')
    cy.contains('press').click({force: true})
    cy.url().should('include', '/press/')
    cy.contains('retailers').click({force: true})
    cy.url().should('include', '/retailers/')
    cy.contains(
      'selected' & 'archived' & 'about' & 'exploration' & 'texts'
    ).should('not.be.visible')

    cy.contains('shop').click({force: true})
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

    cy.get('[data-cy=logo]').click({force: true})
    cy.url().should('include', '/selected/')
  })
})
