import { test, expect } from '@playwright/test'
test("Working With DropDowns", async ({ page }) => {
    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')
    //await page.locator('select[id="country"]').click()
    //by Text
    //await page.locator('select[id="country"]').selectOption('Australia')
    //By values
    // await page.locator('select[id="country"]').selectOption("75")
    //or
    //await page.locator('select[id="country"]').selectOption({value:75})
    //by index
    // await page.locator('select[id="country"]').selectOption({ index: 1 })

       await page.locator('select[id="country"]').selectOption({label:'French Southern Territories'})
          const count=await page.$$('#country>option')
          console.log(count.length)

         let valuses= await page.locator('#country')

          const conut=await valuses.locators('options').allTextContents()
          //let all=await conut.allTextContent()
          console.log(conut)
    await page.waitForTimeout(2000)

})