import { expect } from "@playwright/test";

class addEmp{
    constructor(page)
    {
        this.page=page;
        this.url=page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        this.username=page.locator('[name="username"]')
        this.password=page.locator('[name="password"]')
        this.loginbtn=page.locator('[type="submit"]')
        this.pimclick=page.locator("//span[text()='PIM']") 
        this.addempclick=page.locator("//a[text()='Add Employee']")
        this.firstname=page.locator('[name="firstName"]')
        this.lastname=page.locator('[name="lastName"]') 
        this.savebtnclick=page.locator('[type="submit"]')  
        this.verifySuccess=page.locator('[class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text"]')
    }
    async launchBrowser(username,password){
        await this.url
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginbtn.click()
    }
    async addEmp(firstName,lastName)
    {
        await this.pimclick.click()
        await this.addempclick.click()
        await this.firstname.fill(firstName)
        await this.lastname.fill(lastName)
        await this.savebtnclick.click()
    }
    async verifySuccessMSg()
    {
        await this.page.waitForTimeout(4000)
        //const msg=await this.verifySuccess.textContent()
        expect(await this.verifySuccess.textContent()).toContain('Successfully Saved')
    }
}
export default addEmp;