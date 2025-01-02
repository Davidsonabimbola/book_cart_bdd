const { test, expect, playwright } = require("@playwright/test");

import { Page } from '@playwright/test';

class RegisterFeatures {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async gotoPage() {
    console.log('Navigating to homepage...');
    await this.page.goto('https://bookcart.azurewebsites.net');
    
    
    console.log('Checking if Login button is visible...');
  }

  async clickLogin(){
    const loginButton = this.page.getByRole('button',{name: ' Login '})
  await expect( await loginButton).toBeVisible()
  await loginButton.click()
  console.log('Login button is visible...');

  }


  async register(){
    const registerButton = this.page.getByRole('button',{name: ' Register '})
  await expect( await registerButton).toBeVisible()
  await registerButton.click()
  console.log('Register button clicked...');
  }


  async fill_firstname(firstname:string){
    const firstName_field = this.page.locator('[id="mat-input-2"]')
  await firstName_field.fill(firstname)
  }


  async fill_lastname(lastname:string){
    const lastName_field = this.page.locator('[id="mat-input-3"]')
  await lastName_field.fill(lastname)
  }

  async fill_username(username:any){
    const userName_field = this.page.locator('[id="mat-input-4"]')
  await userName_field.fill(username)

  }

  async fill_password(password:any){
    const password_field = this.page.locator('[id="mat-input-5"]')
  await password_field.fill(password)

  }

  async verify_password(password:any){
    const verifyPassword_field = this.page.locator('[id="mat-input-6"]')
  await verifyPassword_field.fill(password)
  }


  async click_radioButton(){
  const male_radio_button = this.page.locator('[id="mat-radio-2-input"]')
  await male_radio_button.check()
  console.log('Radio button clicked...');
  }


  async successfulRegistration(){
    const registerButton = this.page.getByRole('button',{name: ' Register '})
  await registerButton.click()
  console.log('Sucessful Registration ....')
  }
}

export default RegisterFeatures;