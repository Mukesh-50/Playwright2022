const{test,expect}= require("@playwright/test")

test("@Regression Handle Frames In PW", async function({page}){

await page.goto("https://ineuron-courses.vercel.app/practise")

const myframe= await page.frameLocator("//iframe[contains(@src,'ineuron')]")

await myframe.getByText("Log in").click()

/*
        Complete login within iframe
*/
 
// use this for nested frames in playwright
 //await myframe.frameLocator("")

})