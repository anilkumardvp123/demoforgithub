import {test,expect,chromium,firefox,webkit} from '@playwright/test'
test.describe("Working with newContext",()=>{
 test.only("Working With NewContext Like user And Admin On One Applications",async({page})=>{
      const browser=await chromium.launch()
      const context1=await browser.newContext()
      const context2=await browser.newContext()


      const page1=await context1.newPage()
      const page2=await context2.newPage()
      await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      await page1.locator('[name="username"]').fill('Admin')
      await page1.locator('[name="password"]').fill('admin123')
      await page1.locator('[type="submit"]').click()
      await expect(page1).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      await expect(page1).toHaveTitle('OrangeHRM')
      await page1.waitForTimeout(2000)


      await page2.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      await page2.locator('[name="username"]').fill('Admin')
      await page2.locator('[name="password"]').fill('admin123')
      await page2.locator('[type="submit"]').click()
      await expect(page2).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      await expect(page2).toHaveTitle('OrangeHRM')
     await page1.waitForTimeout(10000)

})
test("Two Applications on one Browser",async({page})=>{

const browser=await chromium.launch()
      const context1=await browser.newContext()
      //const context2=await browser.newContext()


      const page1=await context1.newPage()
      const page2=await context1.newPage()
      await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      await page1.locator('[name="username"]').fill('Admin')
      await page1.locator('[name="password"]').fill('admin123')
      await page1.locator('[type="submit"]').click()
      await expect(page1).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      await expect(page1).toHaveTitle('OrangeHRM')
      await page1.waitForTimeout(2000)
   
       await page2.goto("https://testautomationpractice.blogspot.com/")
      await page2.locator('[id="name"]').fill('Admin')
    //   await page2.locator('[name="password"]').fill('admin123')
    //   await page2.locator('[type="submit"]').click()

        console.log(browser.contexts().length);

})

})
