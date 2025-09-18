import { expect } from '@playwright/test';
import data from '../testData/userdata.json'
class OrangeHrm{
    constructor(page)
    {
        this.page=page;
        this.url=page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        this.username=page.locator('[name="username"]')
        this.password=page.locator('[name="password"]')
        this.loginbtn=page.locator('[type="submit"]')
        this.icon=page.locator('[class="oxd-icon bi-caret-down-fill oxd-userdropdown-icon"]')
        this.logout=page.locator("//a[text()='Logout']")
    }
    async validDetails(){
        await this.url
        await this.username.fill(data.valid[0].username)
        await this.password.fill(data.valid[0].password)
        await this.loginbtn.click()
        await expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
      //  await this.page.close()
      await this.icon.click()
      await this.logout.click()
    }
    async invalidUsername(){
        await this.url
        await this.username.fill(data.invalidData1[0].username)
        await this.password.fill(data.invalidData1[0].password)
        await this.loginbtn.click()
        await expect(this.page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
              //  await this.page.close()

    }
    async invalidPassword(){
        await this.url
        await this.username.fill(data.invalidData2[0].username)
        await this.password.fill(data.invalidData2[0].password)
        await this.loginbtn.click()
        await expect(this.page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
             //   await this.page.close()
             await this.logout.click()

    }
    async invalidBoth(){
        await this.url
        await this.username.fill(data.invalidData3[0].username)
        await this.password.fill(data.invalidData3[0].password)
        await this.loginbtn.click()
        await expect(this.page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toHaveText('Invalid credentials')
              //  await this.page.close()


    }



}
export default OrangeHrm;