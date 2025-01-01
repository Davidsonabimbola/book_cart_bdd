"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { Given, When, Then } = require('@cucumber/cucumber');
const { chromium } = require("@playwright/test");
const { test, expect, playwright } = require("@playwright/test");
// type userDetails = {
//   firstname: string,
//   lastname: string,
//   username: any,
//   password:any
// };
// const newUser: userDetails = {
//   firstname: faker.person.firstName(),
//   lastname: faker.person.lastName(),
//   username: faker.internet.displayName(),
//   password:faker.internet.password(),
// }
let page;
Given('I am on the homepage of the book cart website', { timeout: 10000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    const browser = yield chromium.launch({ headless: false });
    const context = yield browser.newContext();
    page = yield context.newPage();
    console.log('Navigating to homepage...');
    yield page.goto('https://bookcart.azurewebsites.net');
    console.log('Checking if Login button is visible...');
}));
When('I click on the login button', { timeout: 5000 }, () => __awaiter(void 0, void 0, void 0, function* () {
    const loginButton = page.getByRole('button', { name: ' Login ' });
    yield expect(yield loginButton).toBeVisible();
    yield loginButton.click();
    console.log('Login button is visible...');
}));
// When('I click on the Register button', {timeout:5000}, async () => {
//     const registerButton = page.getByRole('button',{name: ' Register '})
//   await expect( await registerButton).toBeVisible()
//   await registerButton.click()
// });
// When('I enter the firstname {string} correctly', {timeout:5000}, async (firstName) => {
//     const firstName_field = page.locator('[id="mat-input-2"]')
//   //await firstName_field.fill(newUser.firstname)
//   await firstName_field.fill('Father')
// });
// When('I enter the lastname {string} correctly', {timeout:5000}, async (lastName) => {
//   const lastName_field = page.locator('[id="mat-input-3"]')
// //await firstName_field.fill(newUser.lastname)
// await lastName_field.fill('Mother')
// });
// When('I enter the username {string} correctly', {timeout:5000}, async (userName) => {
//   const userName_field = page.locator('[id="mat-input-4"]')
// //await firstName_field.fill(newUser.username)
// await userName_field.fill('uncle')
// });
// When('I enter the password {string} correctly', {timeout:5000}, async (password) => {
//   const password_field = page.locator('[id="mat-input-5"]')
// //await firstName_field.fill(newUser.password)
// await password_field.fill('Sister')
// });
// When('I re-enter the password {string} correctly', {timeout:5000}, async (password) => {
//   const verifyPassword_field = page.locator('[id="mat-input-6"]')
// //await firstName_field.fill(newUser.password)
// await verifyPassword_field.fill('aunty')
// });
// When('I click on the radio button ', {timeout:5000}, async () => {
//   const male_radio_button = page.locator('[id="mat-radio-2-input"]')
//   await male_radio_button.check()
// });
// Then('my account should be created successfully',{timeout:5000},async()=>{
//   const registerButton = page.getByRole('button',{name: ' Register '})
//   await registerButton.click()
// })
