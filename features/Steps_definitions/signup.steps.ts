const {Given,When,Then,Before} = require('@cucumber/cucumber')
import {Page} from '@playwright/test'

import SignupFeatures from '../Steps_definitions/Pages/Register_Feature';
import { setupBrowser } from './Utils/BrowserUtils';
import FakerGenerator from './Utils/FakerGenerator';



let page:Page
 let newUser =   FakerGenerator.generateUserDetails()
 let signup : SignupFeatures


 Before(async () => {
  // Initialize browser and page
  page = await setupBrowser(true);
  // Create a single instance of SignupFeatures
  signup = new SignupFeatures(page);
});


Given('I am on the homepage of the book cart website', {timeout: 10000}, async () => {
    // page = await setupBrowser(false)
    //  const signup = new SignupFeatures(page)
     await signup.gotoPage()
    
});

When('I click on the login button', {timeout:5000}, async () => {
  //const signup = new SignupFeatures(page)
  await signup.clickLogin()
});


When('I click on the Register button', {timeout:5000}, async () => {
  //const signup = new SignupFeatures(page)
  await signup.register()

});


When('I enter the firstname {string} correctly', {timeout:5000}, async (firstName:string) => {
  //const signup = new SignupFeatures(page)
  await signup.fill_firstname(newUser.firstname)
  
});

When('I enter the lastname {string} correctly', {timeout:5000}, async (lastName:string) => {
  //const signup = new SignupFeatures(page)
  await signup.fill_lastname(newUser.lastname)

});

When('I enter the username {string} correctly', {timeout:5000}, async (userName:any) => {
  //const signup = new SignupFeatures(page)
  await signup.fill_username(newUser.username)
  
});

When('I enter the password {string} correctly', {timeout:5000}, async (password:any) => {
  //const signup = new SignupFeatures(page)
  await signup.fill_password(newUser.password)
  
});

When('I re-enter the password {string} correctly', {timeout:5000}, async (password:any) => {
  //const signup = new SignupFeatures(page)
  await signup.verify_password(newUser.password)
  
});

When('I click on the radio button', {timeout:5000}, async () => {
  //const signup = new SignupFeatures(page)
  await signup.click_radioButton()

});

Then('my account should be created successfully',{timeout:5000},async()=>{
  //const signup = new SignupFeatures(page)
  await signup.successfulRegistration()
  
})