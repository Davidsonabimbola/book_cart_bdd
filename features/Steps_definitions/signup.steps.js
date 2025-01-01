const {Given,When,Then} = require('@cucumber/cucumber')
const { chromium } = require("@playwright/test");
const { test, expect, playwright } = require("@playwright/test");

let page

Given('I am on the homepage of the book cart website', {timeout: 10000}, async () => {
    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();
    
    console.log('Navigating to homepage...');
    await page.goto('https://bookcart.azurewebsites.net');
    
    console.log('Checking if Login button is visible...');
    
});
