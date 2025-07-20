import {test,expect} from '@playwright/test'
test("Drag And Drop ",async({page})=>{
    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop')
    // await page.locator('li[id="menu-fried-chicken"]').dragTo(await page.locator('ul[id="plate-items"]'))
    // await page.locator('li[id="menu-ice-cream"]').dragTo(await page.locator('ul[id="plate-items"]'))
    // await page.waitForTimeout(2000)
    const source=await page.locator('li[id="menu-fried-chicken"]')
    const destination=await page.locator('ul[id="plate-items"]')
     await source.dragTo(destination)
     await page.waitForTimeout(2000)
})