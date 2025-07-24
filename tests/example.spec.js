import {test,expect,chromium } from '@playwright/test'
test("Login with valid cred",async({page})=>{
   await page.goto('https://www.saucedemo.com/v1/')
   await page.locator('[id="user-name"]').fill('standard_user')
   await page.waitForTimeout(1000)
   await page.locator('[id="password"]').fill('secret_sauce')
   await page.locator('[id="login-button"]').click()
   await page.waitForTimeout(2000)
await expect(page).toHaveURL('https://www.saucedemo.com/v1/inventory.html')
})
test("Creating The Acc",async({page})=>{
   await page.goto("https://bolt.playrealbrokerage.com/register")
   await page.locator('[name="firstName"]').fill('anil')
   await page.locator('[name="lastName"]').fill('kumar')
   await page.locator('[name="username"]').fill("anil123")
   await page.locator('[name="emailAddress"]').fill('anilkumar1234@gmail.com')
   await page.locator('[placeholder="Select your country"]').click()
   await page.waitForTimeout(3000)
await page.locator("//div[text()='Canada']").click()
// selectOption('Canada')
await page.locator('[name="password"]').fill('anil@123')
await page.locator('[name="confirmPassword"]').fill('anil@123')
await page.locator('[name="terms"]').check()
await page.locator('[name="permission"]').check()
await page.locator('[type="submit"]').click()

})


test("flipkart Application",()=>{


    const browser =  chromium.launch({ headless: false }); // set to true to run headless
  const page =  browser.newPage();

  // Block ads, analytics, and images by URL pattern or domain
   page.route('**/*', (route) => {
    const url = route.request().url();

    // Block typical ad and analytics domains or resources
    if (
      url.includes('ads') ||
      url.includes('analytics') ||
      url.match(/\.(png|jpg|jpeg|gif|svg|css|woff2?)$/)
    ) {
      route.abort(); // Block these requests
    } else {
      route.continue(); // Allow all other requests
    }
  });

   page.goto('https://www.flipkart.com');

  // Your test actions here

   browser.close();
})


test('block ads and images on Flipkart', async ({ page }) => {
  // Intercept all requests
  await page.route('**/*', (route) => {
    const url = route.request().url();

    // Block images, ads, analytics, fonts, and CSS
    if (
      url.includes('ads') 
     ||
   url.includes('analytics') 
   ||
       url.match(/\.(png|jpg|jpeg|gif|svg|css|woff2?)$/)
    ) {
      route.abort();
    } else {
      route.continue();
    }
  });

  await page.goto('https://www.flipkart.com');

  // Example assertion - check Flipkart logo is visible (the one loaded as SVG or other)
  await expect(page.locator('[placeholder="Search for Products, Brands and More"]')).toBeVisible();
  await page.waitForTimeout(4000)
  // Your other test steps here...

});
test.only('Network logs example', async ({ page }) => {
  page.on('request', req => {
    console.log(`➡️ ${req.method()} ${req.url()}`);
  });

  page.on('response', res => {
    console.log(`⬅️ ${res.status()} ${res.url()}`);
  });

  await page.goto('https://flipkart.com');
});
