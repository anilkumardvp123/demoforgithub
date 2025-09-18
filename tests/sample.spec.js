import {test,expect}from '@playwright/test'
test("Minthra Application",async({page})=>{
await page.goto("https://www.myntra.com/mens-casual-wear?f=Brand%3AHIGHLANDER%2CKETCH&rawQuery=men%27s%20casual%20wear&sort=discount")
const product_name=await page.locator('(//h3[text()="KETCH"])[1]')
await expect(product_name).toHaveText("KETCH")
const product_price=await page.locator('(//span[@class="product-discountedPrice"])[1]')
await expect(product_price).toHaveText("Rs. 278")
})
test("Minthra Application ",async({page})=>{
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
test("Zepto Applications",async({page})=>{
    await page.goto('https://www.zeptonow.com/')
   const allitems= await page.locator('[data-slot-id="ProductName"]')
   const all=await allitems.count()
   for(let i=0;i<all;i++)
   {
    const text=(await allitems.nth(i).textContent())?.trim()
    console.log(text)
   }
})

test("Zepto Applications ",async({page})=>{
    await page.goto('https://www.zeptonow.com/')
   const allitems= await page.$$('//div[starts-with(@class,"_base_1i8oq_1 _product-name-container")]')
   //const all=await allitems.count()
   for(let item of allitems)
   {
    const text=await item.textContent()
    console.log(text)
   }
})
test.only("Zepto Applications  ", async ({ page }) => {
  await page.goto('https://www.zeptonow.com/');
await page.waitForSelector('[data-slot-id="ProductName"]');
  const allitems = page.locator('[data-slot-id="ProductName"]');
  const count = await allitems.count();

  for (let i = 0; i < count; i++) {
    const text = (await allitems.nth(i).textContent())?.trim();
    console.log(`Item ${i + 1}: ${text}`);
  }
});

test("Blinkit application",async ({page})=>{
    await page.goto('https://blinkit.com/cn/milk/cid/14/922?utm_source=google&utm_medium=cpc&utm_campaign=21439030315&utm_content=169426454132&utm_term=blinkit&gad_source=1&gad_campaignid=21439030315&gbraid=0AAAAADfkql6gfJ05Km1E1TlutAoFjDiXB&gclid=CjwKCAjwtfvEBhAmEiwA-DsKjmtInwwLS5fCBIjVaLIgiKIjQjDuv5DuULBV_UtrkLDTazKOZvcxVhoCdf8QAvD_BwE')
    const all=await page.$$('[class="tw-text-300 tw-font-semibold tw-line-clamp-2"]')
    for(let item of all)
    {
        var text=await item.textContent()
        console.log(text)
        //console.log(text.count())
    }
       console.log(text.length)

})
