import {test,expect} from '@playwright/test'
test.only('Network logs example', async ({ page }) => {
  page.on('request', req => {
    console.log(`➡️ ${req.method()} ${req.url()}`);
  });

  page.on('response', res => {
    console.log(`⬅️ ${res.status()} ${res.url()}`);
  });

  await page.goto('https://flipkart.com');
  await page.locator('[placeholder="Search for Products, Brands and More"]').fill('realme')
  await page.locator('[placeholder="Search for Products, Brands and More"]').press('Enter')
});