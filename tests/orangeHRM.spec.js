import {test,expect } from '@playwright/test'
test("Login with valid cred",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[type="password"]').fill('admin123')
    await page.locator('[type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})
test("Login with valid Username And Invalid Password",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admin')
    await page.locator('[type="password"]').fill('agg23')
     await page.locator('[type="submit"]').click()
     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
})
test("Login with Invalid Username And valid Password",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admiin')
    await page.locator('[type="password"]').fill('admin123')
     await page.locator('[type="submit"]').click()
     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
})
test("Login with Invalid Username And Invalid Password",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill('Admiin')
    await page.locator('[type="password"]').fill('admien123')
     await page.locator('[type="submit"]').click()
     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
})