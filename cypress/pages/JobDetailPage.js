class JobDetailPage {

    constructor(){
        this.applybutton = ".job-actions__action--applylink a"
    }

    verifyApplyButtonIsVisible(){
        cy.get(this.applybutton).should('not.be.null').should('be.visible')
    }
}

const jobDetailPage = new JobDetailPage();

export default jobDetailPage