import { test, expect } from '@playwright/test';


test.describe('The smoke test for the book cart website', () => {
test('new user registration ', async ({ page }) => {
  await page.goto('/');
  const loginButton = page.getByRole('button',{name: ' Login '})
  await expect( await loginButton).toBeVisible()
  await loginButton.click()
  const registerButton = page.getByRole('button',{name: ' Register '})
  await expect( await registerButton).toBeVisible()
  await registerButton.click()

  const firstName_field = page.locator('[id="mat-input-2"]')
  await firstName_field.fill('Love')
  const lastName_field = page.locator('[id="mat-input-3"]')
  await lastName_field.fill('Vera')
  const userName_field = page.locator('[id="mat-input-4"]')
  await userName_field.fill('Kenzman')
  const password_field = page.locator('[id="mat-input-5"]')
  await password_field.fill('09.Jumpbandwagon')
  await page.locator('mat-icon[matSuffix=""][data-mat-icon-type="font"]:has-text("visibility_off")').nth(0).click()
  //await page.locator('mat-icon[matSuffix=""][data-mat-icon-type="font"]:has-text("visibility")').nth(0).click()
  const verify_password_field = page.locator('[id="mat-input-6"]')
  await verify_password_field.fill('09.Jumpbandwagon')
  const male_radio_button = page.locator('[id="mat-radio-2-input"]')
  await male_radio_button.check()
  await registerButton.click()
  

})
})