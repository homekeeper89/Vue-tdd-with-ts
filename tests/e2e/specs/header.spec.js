describe('Header test', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('count ol thing', ()=>{
        cy.get('[data-cy="header-nav"]').children().should('have.length', 3)
    })
})