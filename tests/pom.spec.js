import {test,expect} from '@playwright/test'
import login1 from '../pageObjects/login.po'
test("Verify login Functionality",async({page})=>{
    var narayan=new login1(page)
   await narayan.launchBrowser()


})