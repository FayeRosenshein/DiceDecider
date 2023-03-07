describe("single character page", () => {
  beforeEach(() => {
		cy.intercept('GET', 'https://www.dnd5eapi.co/api/classes/barbarian',
				{ fixture: 'single-class.json' }
			)
    cy.visit("http://localhost:3000/classes/barbarian")
  })
  describe("When classes page renders correctly", () => {
    it("Should render all class features ", () => {
      cy.get("#root > main > section.one-class-container")
        .find(".one-class-skills").should('be.visible')
    })
		it('should follow the path route', () => {
			cy.url().should('include', '/barbarian')
		})
	})
})