import{test,expect} from '@playwright/test'
test("verify api testing using Get Method ==Singal user",async({request})=>{
    const headers={
        "cookie":"orangehrm=rsdhj3enlgh1j027n2oihjruc8",
        "Referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
        "Host":"opensource-demo.orangehrmlive.com"
    }
    const user=await request.get('https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees',{headers})
    expect(user.status()).toBe(200)
   const response= await  user.json()
   console.log(response)
   expect(response.data.firstName).toBe('aniket')
   expect(response.data.employeeId).toBe('0360')
  
})
test("verify api testing using Get Method ==All user",async({request})=>{
    const headers={
        "cookie":"orangehrm=rsdhj3enlgh1j027n2oihjruc8",
        "Referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
        "Host":"opensource-demo.orangehrmlive.com"
    }
  const user= await request.get("https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC",{headers})
     expect(user.status()).toBe(200)
     const response=await user.json()
     console.log(response)
     expect(response.data[3].lastName).toBe('Brown')
     expect(response.data[2].employeeId).toBe('1253')
     expect(response.data[10].firstName).toBe('Anusha')
})

test("verify api testing using Post Method ==Create user",async({request})=>{
    const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'
    const headers={
        "cookie":"orangehrm=rsdhj3enlgh1j027n2oihjruc8",
        "Referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
        "Host":"opensource-demo.orangehrmlive.com"
    }
    const payload={
        "firstName": "HRM",
        "middleName": "", 
        "lastName":"Hrm",
        "empPicture": null,
        "employeeId": '0888'
    }
 const  createuser=await request.post(url,{headers, data:payload})
 expect(createuser.status()).toBe(200)
 console.log(await createuser.json())
  

})
test("verify api testing using Put Method ==Update user",async({request})=>{

    const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/336/personal-details'
      const headers={
        "cookie":"orangehrm=rsdhj3enlgh1j027n2oihjruc8",
        "Referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
        "Host":"opensource-demo.orangehrmlive.com"
    }
    const payload={
        "lastName": "Nayakaa", 
        "firstName": "Anughaaa", 
        "middleName": "O",
         "employeeId": "0466", 
         "otherId":""
 }
    const updateuser=await request.put(url,{headers,data:payload})
    expect(updateuser.status()).toBe(200)
    const response=await updateuser.json()
    console.log(response)
    expect(response.data.firstName).toBe('Anughaaa')
})

test("verify api testing using Delete Method ==Delete user",async({request})=>{

const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'
  const headers={
        "cookie":"orangehrm=rsdhj3enlgh1j027n2oihjruc8",
        "Referer":"https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
        "Host":"opensource-demo.orangehrmlive.com"
    }
        const payload={
           "ids": [117]

        }

const deleteUser=await request.delete(url,{headers,data:payload})
expect(deleteUser.status()).toBe(200)

})


test("create user",async({request})=>{
    const url="https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"
    const headers={
        "Cookie":"orangehrm=uqtlk2cd7oshbrp1heg65vkecj",
        "Host":"opensource-demo.orangehrmlive.com",
        "Origin":"https://opensource-demo.orangehrmlive.com"
    }
    const payload={
      "firstName": "anil",
      //"middleName": "",
      "lastName": "anil123",
      //"empPicture": null,
      "employeeId": "04541"
    }

    
    
    const createUser=await request.post(url,{headers,data:payload})
     expect(createUser.status()).toBe(200)
    const response= await createUser.json()
    console.log(response)
})

test("verify api testing using patch Method ==update user",async({request})=>{
    const headers={
        "Cookie":"orangehrm=uqtlk2cd7oshbrp1heg65vkecj",
        "Host":"opensource-demo.orangehrmlive.com",
        "Origin":"https://opensource-demo.orangehrmlive.com"
    }
    const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/155/personal-details'
   const payload={
  "lastName": "taraktarak", "firstName": "aniket", "middleName": "", "employeeId": "0360", "otherId": ""
      }
   const updatedate=await request.patch(url,{headers,data:payload})
   expect(updatedate.status()).toBe(200)
  const response= await  updatedate.json()
  console.log(response)
})
test("verify api testing using delete Method ==delete user",async({request})=>{
    const headers={
        "Cookie":"orangehrm=uqtlk2cd7oshbrp1heg65vkecj",
        "Host":"opensource-demo.orangehrmlive.com",
        "Origin":"https://opensource-demo.orangehrmlive.com"
    }

const url='https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'
const payload={
    "ids": [113]

}

const deleteusre=await request.delete(url,{headers,data:payload})
expect(deleteusre.status()).toBe(200)
})