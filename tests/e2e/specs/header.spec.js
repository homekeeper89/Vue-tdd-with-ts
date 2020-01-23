describe('Header test', ()=>{
    beforeEach(()=>{
        cy.visit('/')
    })
    it('count all thing', ()=>{
        cy.get('[data-cy="header-nav"]').children().should('have.length', 3)
    })
    
    it('cy event', ()=>{
        cy.get('[data-cy="header-nav"]').text('test input')
    })
})