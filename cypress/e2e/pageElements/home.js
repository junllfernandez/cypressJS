class homePage
{
    elements =
    {
        homePageSection: () => cy.get('#promo-section'),
        hamburgerMenuBtn: () => cy.get('.hamburger-box'),
        burgerIcon: () => cy.get('.burger-menu > .burger-icon'),
        searchBtn: () => cy.get('.search-nav'),
        searchBox: () => cy.get('#searchBox'),

        //Menu pane
        menuMenuOption: () => cy.get('.trigger-burger-menu'),
        menuTrendingOption: () => cy.get('.header-nav > :nth-child(1) > :nth-child(2) > a'),
        menuCareersOption: () => cy.get('.header-nav > :nth-child(1) > :nth-child(3) > a'),
        menuHelpOption: () => cy.get('.header-nav > :nth-child(1) > :nth-child(4) > :nth-child(1)'),
        menuAboutUsOption: () => cy.get('.header-nav > :nth-child(1) > .last.expanded > :nth-child(1)'),
        contactUsOption: () => cy.get('.menu-focus > .submenu-wrapper > .menu > .first > a')
    }
}
module.exports = new homePage()