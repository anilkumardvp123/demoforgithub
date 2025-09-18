import { expect } from "@playwright/test";

// const { execPath } = require("process");

// class login{
//     constructor(page){
//         this.page=page;
//         this.url=page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
//         this.username=page.locator('input[placeholder="Username"]')
//         this.password=page.locator('input[placeholder="Password"]')
//         this.loginBtn=page.locator('button[type="submit"]')

//     }
//     async gotourl(username,password){
//         await this.url
//         await this.username.fill(username)
//         await this.password.fill(password)
//         await this.loginBtn.click()
//          expect(this.page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
//     }
// }
// export default login;


class anil{
constructor(page){
    this.page=page
    this.url="https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    this.username='input[placeholder="Username"]'
    this.password='input[placeholder="Password"]'
    this.submitBtn='button[type="submit"]'
    this.verifyText="//h6[text()='Dashboard']"
}
async launchBrowser(){

    await this.page.goto(this.url)
    var usernames=['Admin','anil','narayana','jssusyg','sjshsg']
    await this.page.locator(this.username).fill('Admin')//usernames[1]   for(let username of usernames)

    await this.page.locator(this.password).fill('admin123')
    await this.page.locator(this.submitBtn).click()
    await expect(this.page.locator(this.verifyText)).toBeVisible()

}
}

export default anil;
