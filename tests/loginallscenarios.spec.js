const{test,expect}=require("@playwright/test")

/*

        screenshot:"on",
        video:"on",
        trace:"on",
        headless:false

*/

test.describe.configure({mode:"serial"})

test("Blank User and Blank Password",async function({page}){

    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.locator("button[type='submit']").click()

    expect(await page.locator(".errorMessage")).toContainText("Email and Password is required")

})

test("Valid User and Blank Password",async function({page}){
    await page.goto("https://ineuron-courses.vercel.app/login")
    expect(false).toBeFalsy()
})

test("Blank User and valid Password",async function({page}){
    await page.goto("https://ineuron-courses.vercel.app/login")
})

test("Invalid User and Invalid Password",async function({page}){

    await page.goto("https://ineuron-courses.vercel.app/login")

    await page.waitForSelector(".errorMessage")
})

