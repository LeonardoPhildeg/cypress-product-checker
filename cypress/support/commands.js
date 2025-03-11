/// <reference types="cypress" />
require('dotenv').config()

Cypress.Commands.add('sendWhatsApp', () => {
  cy.task('sendWhatsApp', {
    message: 'O PSR SX920 já está disponível na Vanral. Uhuuuuuu!!!',
  })
})
