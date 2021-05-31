// ***********************************************************
// We are importing the object from the corresponding page 
//class and using that object to call methods defined in the 
// HomePage.js file.
//
// We are using fixtures in the before() method to load 
//the testdata from the homepagedata.json file to use in our
//test cases
//
// beforeEach() method is used to to set the viewport and
// launch the baseURL
//
//Each it() block is defining a test case
// ***********************************************************

import homepage from "../../pages/HomePage.js"

describe('launch the app', ()=>{
    let data

      before(()=>{
        cy.fixture("homepagedata.json").then((datatest)=>{
            data = datatest
        })
    })

    beforeEach('before block',()=> {
        cy.viewport(data.viewport)
        cy.visit(data.url) 
        cy.title().should('include', data.homepagetitle)
    })


    it('verify homepage and related components', ()=>{
        homepage.globalNavIsVisible()
        homepage.navigationLinksAreVisible(5)
        homepage.searchSectionIsVisible()
        homepage.browseBySectorIsVisible()
        homepage.verifyBrowseBySectorLinks(data.sectorlinkscount)
        homepage.browseBySectorHeading(data.browsebysectorheading)
    })

    
    it('verify sign in and create account links', ()=>{
        homepage.globalNavIsVisible()
        homepage.verifySignInLink('Logon | Jobs.Economist.com', 'logon')
        homepage.verifyCreateAccountLink('Register | Jobs.Economist.com', 'register')
    })


    it('verify global navigation links', ()=>{
        homepage.verifyNavigationLinksAreWorking()
    })

})