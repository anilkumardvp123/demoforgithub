import {test,expect} from '@playwright/test'

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