import {test ,expect} from '@playwright/test'
import addEmp from '../pageObjects/addEmp.po'
let addemp;
test("add Employee in OrangeHrm",async({page})=>{
  addemp= new addEmp(page)
  await addemp.launchBrowser('Admin','admin123')
  await addemp.addEmp('anil','kumar')
  await addemp.verifySuccessMSg()

})
test('hlo',async({page})=>{
    addemp= new addEmp(page)

   await addemp.launchBrowser('admin','asdfghhgfd')
})