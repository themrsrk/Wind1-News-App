/// <reference types="cypress" />


describe ("Wind1 News App Testing", ()=>{ //this will Describe your test

    it( "Test for Macbook 13 inch", ()=>{ //everything is in IT body() is a test, this it() executes everytime
        cy.viewport('macbook-13')
        cy.visit('localhost:3000') //this will open your desire website

        // cy.contains ('Top Headlines').should('exist')
        cy.contains ('Top Headlines') //this will check that given string is present or not

        cy.get('[href="/business"]').click() //get is used to access a component through html and css selectors and after that you can perform certain events on it.

        cy.contains('Wind1 News - Top Headlines from Business').should('have.text', 'Wind1 News - Top Headlines from Business')

    })

    it( "Test for Iphone 7", ()=>{ //everything is in IT body() is a test, this it() executes everytime
        cy.viewport('iphone-7')
        cy.visit('localhost:3000') //this will open your desire website

        // cy.contains ('Top Headlines').should('exist')
        cy.contains ('Top Headlines') //this will check that given string is present or not

        cy.get('[class=navbar-toggler-icon]').click() //get is used to access a component through html and css selectors and after that you can perform certain events on it.
        cy.get('[href="/business"]').click()

        cy.contains('Wind1 News - Top Headlines from Business').should('have.text', 'Wind1 News - Top Headlines from Business')

    })
})