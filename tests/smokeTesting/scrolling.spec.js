import{test,expect} from '@playwright/test'
test.describe("Working with Scrolling",()=>{
    test("Working With Scrolling   ",async({page})=>{
        await page.goto("https://www.imdb.com/chart/top/")
        
       //first way
       await page.locator("//h3[contains(text(),'200. Wild Tales')]").scrollIntoViewIfNeeded()
       //second way
       const scroll=await page.locator("//h3[contains(text(),'200. Wild Tales')]")
        await scroll.scrollIntoViewIfNeeded();
       //direct click
        await page.locator("//h3[contains(text(),'200. Wild Tales')]").click()
        await page.waitForTimeout(3000)
    })
})