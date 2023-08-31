/// <reference types="cypress" />

import homePage from '../pageElements/home'
import menuPage from '../pageElements/menu'

describe('News and Updates page', () =>
{
    beforeEach(() => 
    {
        cy.visit('/')
        cy.viewport(1024, 768)
    })

    it('Verify home page items are displayed', () => 
    {
        homePage.elements.homePageSection().should('be.visible')
        homePage.elements.hamburgerMenuBtn().should('be.visible')
        homePage.elements.burgerIcon().should('be.visible')
        homePage.elements.searchBtn().should('be.visible')
        cy.log('Home page buttons is displayed')
    })

    it('Verify Search functionality', () => 
    {
        homePage.elements.searchBtn().click()
        homePage.elements.searchBox().should('be.visible')
        homePage.elements.searchBox().type('double big mac').type('{enter}')
        // Verify first search result contains "Double Big Mac"
        cy.get(':nth-child(1) > h4 > a').should('contain', 'Double Big Mac')
        cy.log('Search functionality is working')
    })

    it('View Full Menu', () => 
    {
        homePage.elements.hamburgerMenuBtn().click()
        homePage.elements.menuMenuOption().click()
        menuPage.elements.fullMenuOption().click()
        // Verify full menu is displayed
        cy.get('.content--description-container').should('contain', 'Full Menu')
        cy.log('Full menu is displayed')
    })

    it('Verify Contact Us Page', () => 
    {
        homePage.elements.hamburgerMenuBtn().click()
        menuPage.elements.pickupOption().click()
        menuPage.elements.rewardsSection().should('be.visible')
        menuPage.elements.rewardsSection().scrollIntoView()
        menuPage.elements.rewardsSlider().focus().click().wait(1000).type('right')
        //menuPage.elements.rewardsSlider().type('right')
        // Verify full menu is displayed
        cy.get('.swiper-slide-next > .inner').should('contain', 'Cheeseburger')
    })
})