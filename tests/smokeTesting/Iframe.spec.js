
import { test, expect } from '@playwright/test'
test("Working With Iframes", async ({ page }) => {
    await page.goto("https://kitchen.applitools.com/ingredients/iframe")
    //Method 1 By Using FrameLocator
    // await page.frameLocator('[id="the-kitchen-table"]').locator('[id="column-button-name"]').click()
    // await page.waitForTimeout(2000)
    //Method 2 By Frame (url,name)
    // let frame1 = await page.frame({ url: 'https://kitchen.applitools.com/ingredients/table' })
    // await frame1.locator('[id="column-button-name"]').click({ force: true })
    // await page.waitForTimeout(2000)
    // let parentframe=await page.frame({url:"https://kitchen.applitools.com/ingredients/iframe"})
    // const child=await parentframe.childFrames();
    // await child[1].locator('[name="mytext2"]').fill('anilkumangdg')

    await page.waitForTimeout(2000)
})
test('Working With Neasted Iframe ', async ({ page }) => {
    //test.setTimeout(600000)
    await page.goto('https://ui.vision/demo/webtest/frames/')
    // const hlo = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_1.html' })
    // await hlo.locator('input[name="mytext1"]').fill('anilkumar')
    const framecount= await page.frames()
    console.log(framecount.length)

    // let parentframe = await page.frame({ url: "https://ui.vision/demo/webtest/frames/frame_1.html" })
    // const child = await  parentframe.childFrames();
    // await child[1].locator('[name="mytext2"]').fill('anilkumangdg')
    // await page.waitForTimeout(2000)
   //to handle neasted frames
   const parentframe= await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
   const child=await parentframe.childFrames()
   //await child[0].locator('(//div[@role="radio"])[3]').check()
   await child[0].locator('(//div[@role="option"])[1]').click()
   await page.waitForTimeout(2000)

})
test("Working With Neasted Iframe in different Applications",async({page})=>{
    await page.goto('https://www.dezlearn.com/nested-iframes-example/')
    //const parentframe=await page.frame({url:'https://www.dezlearn.com/wp-content/uploads/2021/03/nested-iframes.html'})
    //const parentframe=await page.frameLocator('[id="iframe1"]').frameLocator()
     const childframes=await parentframe.childFrames()
     await childframes[0].locator('[id="u_5_6"]').click()
     await page.waitForTimeout(3000)



})
