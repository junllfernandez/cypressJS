class menuPage
{
    elements =
    {
        beefOption: () => cy.get('.beef-menu > a'),
        chickenFishOption: () => cy.get('.chicken-menu > a'),
        sidesOption: () => cy.get('.fish-menu > a'),
        drinksOption: () => cy.get('.healthy-menu > a'),
        fullMenuOption: () => cy.get('.food-menu-overlay > :nth-child(1) > .first.expanded > .menu > .first > a'),
    }
}
module.exports = new menuPage()