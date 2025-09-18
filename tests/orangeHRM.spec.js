import {test,expect } from '@playwright/test'
import data from '../testData/userdata.json'

test("Login with valid cred",async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('[type="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('[type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})
test("Login with valid Username And Invalid Password",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill(data.invalidData1[0].username)
    await page.locator('[type="password"]').fill(data.invalidData1[0].password)
     await page.locator('[type="submit"]').click()
     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
})
test("Login with Invalid Username And valid Password",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill(data.invalidData2[0].username)
    await page.locator('[type="password"]').fill(data.invalidData2[0].password)
     await page.locator('[type="submit"]').click()
     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
})
test("Login with Invalid Username And Invalid Password",async({page})=>{
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill(data.invalidData3[1].username)
    await page.locator('[type="password"]').fill(data.invalidData3[1].password)
     await page.locator('[type="submit"]').click()
     await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
})

test("Login with valid cred for 10 times",async({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.locator('[name="username"]').fill(process.env.APP_USERNAME)
    await page.locator('[type="password"]').fill(process.env.APP_PASSWORD)
    await page.locator('[type="submit"]').click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

})