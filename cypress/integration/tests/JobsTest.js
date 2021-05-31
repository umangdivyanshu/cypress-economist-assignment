import homepage from "../../pages/HomePage.js"
import jobListingPage from "../../pages/JobListingPage.js"
import jobDetailPage from "../../pages/JobDetailPage.js"

describe('Validate job listing and detail pages', ()=>{

    let data
    before(()=>{
        cy.fixture("jobspagedata.json").then((datatest)=>{
            data = datatest
        })
    })

    beforeEach('before block',()=> {
        cy.viewport(data.viewport)
        cy.visit(data.url) 
        cy.title().should('include', data.homepagetitle)
    })


    it('browse jobs by sector', ()=>{

        homepage.browseBySectorLinks.each(($el, index, $list) => {
            const link = $el.find('a').first();
            if(link.text().includes(data.browsesector)){
                const numberOfJobs = $el.find('small').first().text();
                cy.wrap(link).click()

                jobListingPage.verifyJobCategory(data.browsesector)
                jobListingPage.verifyJobCount(numberOfJobs)
                jobListingPage.verifyJobListings(numberOfJobs)
                jobListingPage.verifyCurrentlySelectedCategory(data.browsesector)
                jobListingPage.clickJobListing()
                jobDetailPage.verifyApplyButtonIsVisible()
            }
        })
    })
})