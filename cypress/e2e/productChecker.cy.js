describe('Product checker', () => {
  before(() => {
    cy.session('login', () => {
      cy.visit('/')
      cy.get('.bt_lojdesk > .bt_area').click()
      cy.get('#repusername').type('52.390.180/0001-69')
      cy.get('#reppassword').type('vanral2025')
      cy.contains('Acessar').click()
    })
  })
  it('Check PSR SX920 availability', () => {
    cy.visit('/home')
    cy.get('#search-prd').type('sx920')
    cy.contains('Teclado Arranjador 61 Teclas PSR SX920 com Fonte Bivolt Yamaha').click()

    cy.url().should('include', 'teclado-arranjador-61-teclas-psr-sx920-com-fonte-bivolt-yamaha')
    cy.contains('li', 'Indisponível').should('exist')
  })

  after(function () {
    if (this.currentTest.state === 'passed') {
      cy.sendWhatsApp()
    }
  })
})
