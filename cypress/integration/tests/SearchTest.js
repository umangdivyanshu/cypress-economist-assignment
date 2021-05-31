import homepage from "../../pages/HomePage.js"
import searchResultPage from "../../pages/SearchResultPage"

describe('validate search', ()=>{
    let data
    before(()=>{
        cy.fixture("searchpagedata.json").then((datatest)=>{
            data = datatest
        })
    })

    beforeEach('launching the app',()=> {
        cy.viewport(data.viewport)
        cy.visit(data.url) 
        cy.title().should('include', data.homepagetitle)
    })

    it('searching a job', () =>{
        homepage.searchSectionIsVisible()
        homepage.enterSearchInputKeyword(data.keyword)
        homepage.enterSearchInputLocation(data.location)
        homepage.selectSearchRadius(data.radius)
        homepage.clickSearchButton()
        searchResultPage.verifySearchedKeyword(data.keyword)
        searchResultPage.verifySelectedRadius(data.radius)
        searchResultPage.verifySearchResultsRendering()
    })



})