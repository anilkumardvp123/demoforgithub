import { test, expect } from '@playwright/test'
test("Working with Flipkart Application", async ({ page }) => {
    await page.goto("https://www.flipkart.com/")
    await page.locator('input[placeholder="Search for Products, Brands and More"]').fill("iphone 16")
    await page.locator('input[placeholder="Search for Products, Brands and More"]').press("Enter")
    const allproduct = await page.$$('div[class="KzDlHZ"]')

    for (let all of allproduct) {
        const value = await all.textContent()
        console.log(value)
        // if(value=='Apple iPhone 16 Plus (Teal, 128 GB)')
        // {
        //     await all.click()
        // }
        //console.log(value)

    }
    await page.waitForTimeout(5000)
})
test.only("Print All Indexes", async ({ page }) => {

    await page.goto('/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
//     const all = await page.locator('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()

//   console.log(all)
//   const one= await page.locator('//span[@class="oxd-text oxd-text--span oxd-main-menu-item--name"]').allTextContents()
//  console.log(one)
// const firstFetch = await page.locator('.oxd-main-menu-item--name').allTextContents();
// console.log('First fetch:', firstFetch);

// const secondFetch = await page.locator('.oxd-main-menu-item--name').allTextContents();
// console.log('Second fetch:', secondFetch);
await page.waitForLoadState('domcontentloaded'); // or 'networkidle'
await page.waitForSelector('.oxd-main-menu-item--name', { timeout: 5000 });

const count = await page.locator('.oxd-main-menu-item--name').count();
console.log(`Found ${count} menu items`);

const menuItems = await page.locator('.oxd-main-menu-item--name').allTextContents();
console.log(menuItems);

await page.screenshot({ path: 'debug.png', fullPage: true });


})