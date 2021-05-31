class SearchResultPage {

    constructor(){
        this.inputKeyword = "input#keyword"
        this.inputLocation = "input#location"
        this.selectRadius = "select#RadialLocation"
        this.joblistings = "ul#listing li.cf"
    }

    verifySearchedKeyword(keyword){
        cy.get(this.inputKeyword).invoke('attr', 'value').should('eq', keyword)
    }

    verifySearchedLocation(){
        cy.get(this.inputLocation).should('have.value', selectedlocation)
    }

    verifySelectedRadius(radius){
         cy.get(this.selectRadius).find("option[value='20']").invoke('attr', 'selected').should('eq', 'selected')
    }

    verifySearchResultsRendering(){
        cy.get(this.joblistings).should('be.visible').should('have.length.at.least', 1)
    }

}

const searchResultPage = new SearchResultPage();

export default searchResultPage