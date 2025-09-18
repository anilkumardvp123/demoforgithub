import { expect,test } from "@playwright/test";

const users={
    user1:{
        "userName":"Admin",
        "passWord":"admin123"
    },
     user2:{
        "userName":"Admi",
        "passWord":"admi123"
    },
     user3:{
        "userName":"Adminn",
        "passWord":"adminn123"
    },
     user4:{
        "userName":"Admine",
        "passWord":"admine123"
    }
}


for(let user in users){
test(`data driven testing example --${users[user].userName}`,async({page})=>{
    await page.goto('/web/index.php/auth/login')
    await page.locator("input[name='username']").fill(`${users[user].userName}`)
   await page.locator("input[type='password']").fill(`${users[user].passWord}`)
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})
}


// example 3:
// ================
const user=[
    {"userName":"Admin",
      "passWord":"admin123"   
    },
    {
    "userName":"Admin",
    "passWord":"admin123" 
    }
]

 test(`data driven testing --${user[0].userName}`,async({page})=>{
    await page.goto('/web/index.php/auth/login')
    await page.locator("input[name='username']").fill(`${user[0].userName}`)
    await page.locator("input[type='password']").fill(`${user[0].passWord}`)
    await page.locator("button[type='submit']").click()
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})