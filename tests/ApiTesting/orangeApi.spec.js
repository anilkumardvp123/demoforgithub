import { test, expect } from '@playwright/test'

test("verify the api Testing", async ({ request }) => {
    const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC'
    const headers= {
      "Cookie": "orangehrm=pah6mrg3fbj85lda2ouitm8dsf",
        "Cookie": "orangehrm=hpchnaq63g9qi2t2jg9nlo4utk",
    "Origin": "https://opensource-demo.orangehrmlive.com",
    "Referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee",
    "server":"nginx",
    
    "cookie":"orangehrm=7gc2eo42bdaeimio5hs92uvh5h",
    "host":"opensource-demo.orangehrmlive.com",
     "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
    // "sec-ch-ua":"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"

    }
   const response= await request.get(url,headers)
   expect(response.status()).toBe(200)
   const all=await response.json()
   console.log(all)


})


test('Playwright Test Case - Understanding GET Method', async ({ request }) => {
  const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC';

  const headers = {
    "Cookie": "orangehrm=pah6mrg3fbj85lda2ouitm8dsf",
    "cookie":"orangehrm=7gc2eo42bdaeimio5hs92uvh5h",
    "host":"opensource-demo.orangehrmlive.com",
     "referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
  };

  const response = await request.get(url, { headers });

  // Verify status code
  expect(response.status()).toBe(200);

  const responseBody = await response.json();

  console.log(responseBody)

  // Log the response body to the console
  console.log(responseBody);

  // Ensure the directory exists
  const dir = "apiresponses";
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true }); // Create directory recursively
  }

  // Write the response body to a file
  fs.writeFileSync("apiresponses/AllEmployees.txt", JSON.stringify(responseBody, null, 2));
});
test.only("Working With Api Testing -Get Method ",async({request})=>{
   const response= await request.get('https://jsonplaceholder.typicode.com/posts/1')
   const res= await response.json()
   console.log(res)
   await expect(response.json()).toBe(200)
    
})