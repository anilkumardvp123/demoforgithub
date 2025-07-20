import {test,expect} from '@playwright/test'
test("Working With Tabs",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/windows")
    //await page.locator("//a[text()='Click Here']").click()
    const [newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[text()='Click Here']").click()
    ])
    await newTab.waitForLoadState()
     const nw=await newTab.locator("//h3[text()='New Window']")
     await expect(nw).toHaveText('New Window')
     console.log(newTab.url())
     console.log(newTab.title())
     const textvalue = await newTab.locator('.example>h3').textContent();

    console.log("Text on new page:", textvalue);

    await expect(await newTab.title()).toBe('New Window');

    await page.waitForTimeout(5000)

})
test("working With Tabs other way",async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/windows")
    await page.click("//a[text()='Click Here']")
  const newvalues=  await page.waitForEvent('popup')
           const newpage=   await newvalues
           await newpage.waitForLoadState()
       const newwindo=    await newpage.locator('.example>h3').textContent()
       console.log(newwindo)
})
test("working With Tabs -Flipkart Application",async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.locator('[name="q"]').fill("redmi")
    await page.locator('[name="q"]').press("Enter")
    await page.locator('//img[@src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/b/s/-original-imah2hfpqxjnkvts.jpeg?q=70"]').nth(0).click()
   const newpromise= await page.waitForEvent('popup')
   const newpage=await newpromise;
   await newpage.waitForLoadState()
   await newpage.locator("[class='QqFHMw vslbG+ In9uk2']").click({force:true})
  await expect(await newpage.locator('[class="iH5ZGp"]')).toHaveText('From Saved Addresses ')

})
test.only("Working With Tabs flipkart",async({page})=>
{
    await page.goto('https://www.flipkart.com/')
    await page.locator('[name="q"]').fill("redmi")
    await page.locator('[name="q"]').press("Enter")
    const [newTab]=await Promise.all([
        page.waitForEvent('popup'),
        page.locator('//img[@src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/r/b/s/-original-imah2hfpqxjnkvts.jpeg?q=70"]').nth(0).click()

        
    ])
    await newTab.waitForLoadState()
    await newTab.locator("[class='QqFHMw vslbG+ In9uk2']").click({force:true})
    await expect(await newTab.locator('[class="iH5ZGp"]')).toHaveText('From Saved Addresses ')
})