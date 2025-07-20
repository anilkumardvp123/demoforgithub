import { test, expect } from '@playwright/test'
test.describe("Automation testing", () => {

    test("Working With CheckBoxes", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/")
        const isChecked = await page.locator('[id="sunday"]').isChecked()
        console.log(isChecked)
        if (!isChecked) {
            await page.locator('[id="sunday"]').check()

        }
        // await page.locator('[id="sunday"]').uncheck()
        await expect(await page.locator('[id="sunday"]')).toBeChecked()
        await page.waitForTimeout(5000)


    })
    test("Working With Checkboxes", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/")
        const checkboxes = ['[id="sunday"]', '[id="monday"]', '[id="tuesday"]', '[id="wednesday"]']
        for (let checkbox of checkboxes) {
            await page.locator(checkbox).check()
        }
        await page.waitForTimeout(4000)
    })
    test("Working With Checkboxes By using For Loop", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/")
       // const checkboxes = await page.$$('[type="checkbox"]')
        for (let checkbox of checkboxes) {
            await page.locator(checkbox).check()
        }

    })
     test("Working With Checkboxesw By using For Loop", async ({ page }) => {
        await page.goto("https://testautomationpractice.blogspot.com/")
       const checkboxes = await page.$$('[type="checkbox"]')
        for (let checkbox of checkboxes) {
        
            await checkbox.check()
    }

    })


})

