 import {test,expect} from "@playwright/test";
 import addEmpdata from '../testData/addempData.json'


 const jobTitle={
  "jobTitle1":"Automation QA1",
  "jobTitle2":"Automation QA2",
  "jobTitle3":"Automaion QA3"

 }

 for(let job in jobTitle){
test(`Verify add Employee ---${jobTitle[job]} `,async({page})=>{
      await page.goto('/web/index.php/auth/login');
      await page.locator("input[name='username']").fill("Admin");
      await page.locator("input[type='password']").fill("admin123");
      await page.locator("button[type='submit']").click();
      await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
      await page.locator("//span[text()='Admin']").click()
      await page.locator('(//span[@class="oxd-topbar-body-nav-tab-item"])[2]').click()
      await page.locator('(//a[@class="oxd-topbar-body-nav-tab-link"])[1]').click()
      await page.locator('[class="oxd-icon bi-plus oxd-button-icon"]').click()
    let random5Char= Math.random().toString(36).substring(2,7)
      await page.locator('(//input[@class="oxd-input oxd-input--active"])[2]').fill(addEmpdata.jobTitle[job]+random5Char)
      await page.locator('[placeholder="Type description here"]').fill(addEmpdata.description)
      console.log(random5Char)
      await page.locator('[type="submit"]').click()
      await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')

})
 }