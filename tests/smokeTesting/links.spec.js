//const {test ,expect}=require('@playwright/test')
import{test,expect} from '@playwright/test'
test.describe("Working with Elements",()=>{
    test("Working With Elements ",async({page})=>{
        await page.goto('https://trello.com/')
        await page.locator("//a[text()='Log in']").nth(0).click({force:true})
        await page.getByTestId('username').fill('asdfghgfds@12342')
        await page.waitForTimeout(2000) 
       })
       test.only("Working with Links",async({page})=>{
        await page.goto("https://www.wikipedia.org/")
       const links= await page.locator('//a')
       //await expect(await page.locator('//a')).toHaveCount(371)
       await expect.soft(await page.locator('//a')).toHaveCount(371)
       await page.locator('a[id="js-link-box-en"]').click()
       await page.waitForTimeout(3000)
       await page.goBack()
       await page.waitForTimeout(3000)
       await page.goForward()
       await page.waitForTimeout(3000)
       


       })
})