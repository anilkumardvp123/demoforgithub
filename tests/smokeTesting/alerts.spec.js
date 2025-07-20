import {test,expect} from '@playwright/test'
test.beforeEach(async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
})
test("Working with Alerts",async({page})=>{
 
    page.locator('button[onclick="jsAlert()"]').click()
   page.on('dialog',async dialog=>{
    expect(dialog.message()).toContain('I am a JS Alert')
       dialog.accept()
   })
   await page.waitForTimeout(3000)
})
test.only("Working With Confirm",async({page})=>{
    page.locator('//button[text()="Click for JS Confirm"]').click()
    page.on("dialog",async dialogg=>{
        expect(dialogg.message()).toContain("I am a JS Confirm")
        dialogg.accept()
        //dialogg.dismiss()
        
    })
    await page.waitForTimeout(3000)
})
test("Working with  Prompt",async({page})=>{
    page.locator('[onclick="jsPrompt()"]').click()
    page.on("dialog",async dialog=>{
        dialog.accept("anilkumar")
    })
    await page.waitForTimeout(2000)
})