class JobListingPage{
    constructor(){
        this.jobcategory = "div[role='status'] h1"
        this.jobcount = "div.grid-item h2"
        this.joblistings = "ul#listing li.cf"
        this.currentcategory = "em.filter__parent-term"
    }

    verifyJobCategory(category){
        cy.get(this.jobcategory).should('contain', category)
    }

    verifyJobCount(jobs){
        cy.get(this.jobcount).should('contain.text', jobs)
    }

    verifyJobListings(jobs){
        cy.get(this.joblistings).should('not.be.null').should('be.visible').should('have.length', jobs)
    }

    verifyCurrentlySelectedCategory(category){
        cy.get(this.currentcategory).should('contain', category)
    }

    clickJobListing(){
        cy.get(this.joblistings).find('a').first().click()
    }
  
}

const jobListingPage = new JobListingPage();

export default jobListingPage