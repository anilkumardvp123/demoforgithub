import {test ,expect} from '@playwright/test'
import login from "../../Demo/pageObjects/login.po"

test("Login With valid creds using POM",async({page})=>{
   let anil =new login(page)
   await anil.gotourl("Admin","admin123")
    
})