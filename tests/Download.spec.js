// import {test,expect} from '@playwright/test'
// const fs = require('fs')
// const path = require('path');
test('Download a Single file and assert', async ({ page }) => {
     await page.goto('https://the-internet.herokuapp.com/download')

//         const [download] = await Promise.all([
//             page.waitForEvent('download'),
           await page.locator('[href="download/random_data.txt"]').click()
//         ]);

//         const suggestedFileName = download.suggestedFilename()
//         const filePath = 'downloads/' + suggestedFileName
//         await download.saveAs(filePath)
//         expect(fs.existsSync(filePath)).toBeTruthy() // whether file is downloaded or not 

//         //export files 
   })
import { test, expect } from '@playwright/test';
import fs from 'fs';

//test('should download a file', async ({ page }) => {
  // Go to the page with the download link/button
  //await page.goto('https://example.com/download-page');

  // Start waiting for the download before the action
  //const [ download ] = await Promise.all([
    //page.waitForEvent('download'), // waits for download to start
   // page.click('text=Download Report') // or the selector for your download button
  //]);

  // Save the downloaded file to disk
//   const downloadPath = await download.path(); // temp path
//   const suggestedFilename = download.suggestedFilename();
//   await download.saveAs(`downloads/${suggestedFilename}`);

//   // Optionally verify file exists or contents
//   expect(fs.existsSync(`downloads/${suggestedFilename}`)).toBe(true);
//});
