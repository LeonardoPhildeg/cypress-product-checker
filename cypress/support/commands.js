/// <reference types="cypress" />
require('dotenv').config()

Cypress.Commands.add('sendWhatsApp', () => {
  cy.task('sendWhatsApp', {
    message: 'O PSR SX920 ainda não está disponível na Vanral. Trágico!',
  })
})
