import{test,expect} from '@playwright/test'
test.describe("Working with screenshot",()=>{
    test("Working With screenshot   ",async({page})=>{
        await page.goto('https://testautomationpractice.blogspot.com/')
        //for Particular Element
       await page.locator('[id="email"]').screenshot({path:'./tests/page.png'})
       //for page
       await page.screenshot({path:"./screenshot/anil.png"})
       //for full page
       //await page.screenshot({path:"./screenshot/fullpage.png",fullPage:true})
       await page.screenshot({path:'./screenshot/anil/full.png',fullPage:true})

    })
})













