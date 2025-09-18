import {test,expect} from '@playwright/test'
import OrangeHrm from '../../pageObjects/orangeHrm.po'
let user;
test("verify the User Data",async({page})=>{
       user =new OrangeHrm(page)
       await user.validDetails()
       
       await user.invalidUsername()
   
       await user.invalidUsername()
       
       await user.invalidBoth()
       

})