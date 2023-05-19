import { LoginPage } from "./pages/login_page"
const loginPage = new LoginPage()
describe('All Login Tests', function(){
    it('Login Test 1', function(){
   
        cy.visit('https://iftradi.com/login')
        loginPage.enterUsername('ramzan.ahmad@invozone.com')
        loginPage.enterPassword('Ramzan@1218')
        loginPage.clickLogin()
        //cy.get(':nth-child(1) > .form-control').type('ramzan.ahmad@invozone.com')
        //cy.get(':nth-child(2) > .form-control').type('Ramzan@1218')
        //cy.get('.btn > .ml-50').click()
        
        })
        
        
        it('Login Test 2', function(){
           
            cy.visit('https://iftradi.com/login')
            loginPage.enterUsername('ramzan.ahmad@invozone.com')
            loginPage.enterPassword('Ramzan@1218')
            loginPage.clickLogin()
            //cy.get(':nth-child(1) > .form-control').type('ramzan.ahmad@invozone.com')
            //cy.get(':nth-child(2) > .form-control').type('Ramzan@1218')
            //cy.get('.btn > .ml-50').click()
            
            })
        
            it('Login Test 3', function(){
           
                cy.visit('https://iftradi.com/login')
                loginPage.enterUsername('ramzan.ahmad@invozone.com')
                loginPage.enterPassword('Ramzan@1218')
                loginPage.clickLogin()
               
                //cy.get(':nth-child(1) > .form-control').type('ramzan.ahmad@invozone.com')
                //cy.get(':nth-child(2) > .form-control').type('Ramzan@1218')
                //cy.get('.btn > .ml-50').click()
                
                })
})
