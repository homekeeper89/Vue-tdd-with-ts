describe('count num, describe num', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('run count ', () => {
        cy.get('[data-qa="increase"]').should('be.visible')
        cy.get('[data-qa="increase"]').click()
        cy.get('[data-qa="count-value"]').contains(1)
    })
})