describe('home page', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('header contains recipe heading with a message that there are no recipes', () =>{
        cy.get('.App-header').should('contain', 'My recipes')
        cy.get('p').should('contain', 'There are no recipes to list.')
    })

    it ("contains an add recipe button that when clicked opens a form", () => {
        const addRecipebutton = cy.get('#add-recipe')
        addRecipebutton.click()

        expect(cy.get('#recipe-form')).toExist()
    })

})