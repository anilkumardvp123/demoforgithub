import { test, expect } from '@playwright/test'

test("verify the api Testing", async ({ request }) => {
    //single user
    const qresponse = await request.get('https://reqres.in/api/users/2')
    await expect(qresponse.status()).toBe(200)
    console.log(qresponse.json())
    //await expect(qresponse.data.email).toBe('janet.weaver@reqres.in')

    //list of users
    const getAlluser = await request.get('https://reqres.in/api/users?page=2')
    await expect(getAlluser.status()).toBe(200)
    let response = await getAlluser.json()
    console.log(response)
    await expect(response.data[0].email).toBe("michael.lawson@reqres.in")
    await expect(response.data[3].avatar).toBe('https://reqres.in/img/faces/10-image.jpg')




})
test("Post Api",async({request})=>{
    const url='https://reqres.in/api/users'
    const headers={ "x-api-key": "reqres-free-v1" }
    
   const payload= {
    "name": "morpheus",
    "job": "zion resident"
}
   const response= await request.post(url,{headers,payload})
   console.log(response.json())
   await expect(response.status()).toBe(201)
   const anil=await response.json()
   console.log(anil)

})
test.only("Update Put Method Api",async({request})=>{
    const url='https://reqres.in/api/users/2'
    const headers={ "x-api-key": "reqres-free-v1" }
    
   const payload= {
    "name": "morpheus",
    "job": "zion resident"
}
      const response=await request.put(url,{headers,payload})
      expect(response.status()).toBe(200)
      const anil=await response.json()
      console.log(anil)
      //expect(anil.data[0].job).toBe("asdfgfds")
      expect(response.data.job).toBe("trainer")
    
    
    })