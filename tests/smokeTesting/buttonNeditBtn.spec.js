import {test,expect} from '@playwright/test'
test("Working With Buttons",async({page})=>{
    await page.goto("https://playwright.dev/")
    await page.locator('[href="/python/"]').click({force:true})
    await page.waitForTimeout(2000)
})
test('Verify clicking on Edit box element ', async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    // await page.locator('input[name="username"]').type("Admin")
    // await page.locator('input[name="username"]').clear()
    //await page.locator('input[name="username"]').fill("Admin")
     await page.locator('input[name="username"]').pressSequentially("anill",{delay:2000})
     //await page.locator('input[name="username"]').press('Shift+Bakspace')
     await page.locator('input[name="username"]').press('Enter')


    await page.waitForTimeout(3000)
})