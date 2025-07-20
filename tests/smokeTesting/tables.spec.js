import {test,expect} from '@playwright/test'
test.describe("tables",()=>{

  test("Working With Tables",async({page})=>{
        await page.goto('https://the-internet.herokuapp.com/tables')
        //To Count No OF Tables
        await expect(page.locator('//table')).toHaveCount(2)
        //To Count NO OF  Columns
        await  expect(await page.locator('//table[@id="table1"]//thead//tr//th')).toHaveCount(6)
        //To Count No Of Rows
        await expect(await page.locator('//table[@id="table1"]//tbody//tr')).toHaveCount(4)
        //To Find Particular text or values
        await expect(await page.locator('(//table[@id="table1"]//tbody//tr//td[4])[3]')).toHaveText('$100.00	')
        //or
        await expect(await page.locator("(//td[text()='Frank'])[1]")).toHaveText('Frank')
        const ff=await page.locator('#table1>tbody>tr>td').nth(4)
        await expect(ff).toHaveText('http://www.jsmith.com	')
    })


})
  