import {test,expect}from '@playwright/test'
test("Minthra Application",async({page})=>{
await page.goto("https://www.myntra.com/mens-casual-wear?f=Brand%3AHIGHLANDER%2CKETCH&rawQuery=men%27s%20casual%20wear&sort=discount")
const product_name=await page.locator('(//h3[text()="KETCH"])[1]')
await expect(product_name).toHaveText("KETCH")
const product_price=await page.locator('(//span[@class="product-discountedPrice"])[1]')
await expect(product_price).toHaveText("Rs. 278")
})
test.only("Minthra Application ",async({page})=>{
    await page.goto('https://www.myntra.com/mens-casual-wear?f=Brand%3AHIGHLANDER%2CKETCH&rawQuery=men%27s%20casual%20wear&sort=discount')
   //to print all product names by using alltextcontents
   // const product_names= await page.locator('//h3[@class="product-brand"]').allTextContents()
    //console.log("All Products Name IS    "+ product_names)
   // to print all products by using forloop and .textcontents
   const product_names= await page.$$('//h3[@class="product-brand"]')
   for(let product_name of product_names)
   {
   const  productsnames=await product_name.textContent()
   console.log("All Products Name IS    "+ productsnames)
   }
   const product_prices=await page.$$('//span[@class="product-discountedPrice"]')
   for(let product_price of product_prices )
   {
    const productprices=await product_price.textContent()
    console.log('All Product prices are '+productprices)
   }
})