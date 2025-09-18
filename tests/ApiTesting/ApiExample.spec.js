import { test, expect } from '@playwright/test'
test("Working With Api Testing -Get Method ", async ({ request }) => {
   const response = await request.get('https://jsonplaceholder.typicode.com/posts/1')
  
   expect(response.ok()).toBeTruthy()
    await expect(response.status()).toBe(200)
   const res = await response.json()
   console.log(res)
   await expect(res.id).toBe(1)
   await expect(res.userId).toBe(1)
   await expect(res.title).toBe('sunt aut facere repellat provident occaecati excepturi optio reprehenderit')
   await expect(res.body).toBe('quia et suscipit\n' +
      'suscipit recusandae consequuntur expedita et cum\n' +
      'reprehenderit molestiae ut ut quas totam\n' +
      'nostrum rerum est autem sunt rem eveniet architecto')
   await expect(res).toHaveProperty('userId')
})

test("working with Api testing --Get All Users", async ({ request }) => {
   const alluser = await request.get("https://jsonplaceholder.typicode.com/posts")
   expect(alluser.status()).toBe(200)
   expect(alluser.ok()).toBeTruthy()
   var data = await alluser.json()
   console.log(data)
   expect(data[1].id).toBe(2)
   expect(data[1].userId).toBe(1)
   expect(data[1].title).toBe('qui est esse')
   expect(data[1].body).toBe('est rerum tempore vitae\n' +
      'sequi sint nihil reprehenderit dolor beatae ea dolores neque\n' +
      'fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\n' +
      'qui aperiam non debitis possimus qui neque nisi nulla')
   expect(data[99].id).toBe(100)

   expect(data[1]).toHaveProperty('userId')
   expect(data[1]).toHaveProperty('id')

   expect(data[1]).toHaveProperty('title')
   expect(data[1]).toHaveProperty('body')


})
test("working with api testing using --Post Method",async({request})=>{
   const url='https://jsonplaceholder.typicode.com/posts'
   const headers={
      "Content-Length":"<calculated when request is sent>",
      "Host":"<calculated when request is sent>",
      "User-Agent":"PostmanRuntime/7.45.0",
      "Accept":"*/*"

   }
   const payload= 
 {
    "title": "foo",
    "body": "bar",
    "userId": "100"
    }
const adduser=await request.post(url,{headers,payload})
expect(add.status()).toBe(400)
const add = await add.json()
console.log(adduser)
}) 

test("working with api testing --delete Methods",async({request})=>
{
 const user=  await request.delete('https://jsonplaceholder.typicode.com/posts/1')
 expect(user.status()).toBe(200)


})