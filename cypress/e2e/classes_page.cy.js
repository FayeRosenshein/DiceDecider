describe("classes page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/classes")
  })
  describe("When classes page renders correctly", () => {
    it("Should render all classes card ", () => {
      cy.get("#root > main > section > div.character-card-container")
        .find(".character-card")
        .should("have.length", 12)
    });
		it("Should render class card correctly ", () => {
			cy.intercept('GET', 'https://www.dnd5eapi.co/api/classes',
				{ fixture: 'class.json' }
			)
			cy.get(".character-card-container").find(".character-card").should("be.visible")
			cy.get(".character-name").should("contain", "Barbarian")
		})
	})
})