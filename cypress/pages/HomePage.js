class HomePage {

    //creating a constructor to initialise the all the locators
    constructor(){
        this.globalnavSection = "header.banner";
        this.signinLink = "a[href='/logon/']"
        this.createaccountLink = "a[href='/register/']"
        this.navLinks = "nav#primary-nav li"
        this.searchsection = "section.search.brick"
        this.inputKeyword = "input#keywords"
        this.inputLocation = "input#location"
        this.selectRadius = "select#RadialLocation"
        this.searchbutton = "input[value='Search']"
        this.searchsuggestions = "div.autocomplete-suggestion"
        this.selectedlocation = "d.field input[name='LocationId']"
        this.browsebysectorSection = "section.browse.brick"
        this.browsebysectorHeading = ".browse.brick span"
        this.sectorLinks = ".browse.brick li"
    }

    globalNavIsVisible(){
        cy.get(this.globalnavSection).should('not.be.null').should('be.visible')
    }

    verifyCreateAccountLink(title, url){
         cy.get(this.createaccountLink).click()
         cy.title().should('eq', title)
         cy.url().should('include', url)
    }

    verifySignInLink(title, url){
         cy.get(this.signinLink).click()
         cy.title().should('eq', title)
         cy.url().should('include', url)
    }

    navigationLinksAreVisible(length){
        cy.get(this.navLinks).should('not.be.null').should('be.visible').should('have.length.at.least', length)
    }

     //using a loop on the links to check every link in global navigation
    verifyNavigationLinksAreWorking(){
        cy.get(this.navLinks).each(($el, index, $listOfLinks) => {
            if(index<(($listOfLinks.length)-1)){  
                const link = $el.find('a').first();
                if(expect(link).to.have.attr("href").not.contain("undefined")){
                    const expectedHref = link.attr("href")
                    cy.visit('https://jobs.economist.com'+link.attr('href'));
                    cy.url().should('include', expectedHref)
                }   
            }
        })
    }

   
    verifyNavLinks(){
                  cy.get("nav#primary-nav li").each(($el, index, $listOfLinks) => {
            cy.wait(5000)
            const link = $el.find('a').first();
            const expectedHref = link.attr("href")
            if(expect(link).to.have.attr("href").not.contain("undefined")){
                cy.wrap(link).click({force: true});
                cy.url().should('include', expectedHref)
            }
        })
    }

    searchSectionIsVisible(){
        cy.get(this.searchsection).should('be.visible')
    }

    enterSearchInputKeyword(keyword){
        cy.get(this.inputKeyword).should('be.visible').should('be.enabled').type(keyword)
    }

    enterSearchInputLocation(location){
        cy.get(this.inputLocation).should('be.visible').click() 
        cy.get(this.inputLocation).should('be.enabled').type(location)
        cy.get(this.searchsuggestions).first().click()
    }

    get selectedLocation(){
        return cy.get(this.selectedlocation)
    }

    selectSearchRadius(radius){
        cy.get(this.selectRadius).should('be.visible').select(radius).should('have.value', radius)
    }

    clickSearchButton(){
        cy.get(this.searchbutton).should('be.visible').click()
    }

    browseBySectorIsVisible(){
        cy.get(this.browsebysectorSection).should('not.be.null').should('be.visible')
    }

    browseBySectorHeading(heading){
        cy.get(this.browsebysectorHeading).should('contain', heading)
    }
    
    verifyBrowseBySectorLinks(len){
        cy.get(this.sectorLinks).should('not.be.null').should('be.visible').should('have.length', len)
    }

    get browseBySectorLinks(){
        return cy.get(this.sectorLinks)
    }
    
}

//creating object of this page and exporting it to use in the test files
const homepage = new HomePage();

export default homepage