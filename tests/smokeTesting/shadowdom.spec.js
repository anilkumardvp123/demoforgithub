import {test,expect} from '@playwright/test'
test.describe("Working With Shadowdom ",()=>{
test("Working With Shadowdom Example1",async({page})=>{

    await page.goto("http://watir.com/examples/shadow_dom.html")
    await page.locator('[type="text"]').fill("anilkumar")
    await page.locator('(//input[@type="checkbox"])[1]').check()
    await page.waitForTimeout(3000)
})
test.only("Working With Shadowdom Example2",async({page})=>{
await page.goto('https://books-pwakit.appspot.com/')
await page.locator('[id="input"]').fill("telugu")
await page.locator('[id="input"]').press('Enter')
//await page.waitForTimeout(2000)
//await page.locator("//h2[text()='4000+ German - Telugu Telugu - German Vocabulary']").click()
await page.waitForTimeout(3000)
await page.goBack()
await page.waitForTimeout(5000)
await page.goForward()
})

})