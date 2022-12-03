const{test,expect}= require("@playwright/test")

test("my first test", async function({page}){
    expect(12).toBe(12)
})

test("my second test", async function({page}){
    expect(20.0).toBe(20.0)
    expect("Manoj".includes("PW")).toBeFalsy()
})

test("my third test", async function({page}){
    
    await page.goto("https://google.com")

    const url=await page.url()

    console.log(("URL is "+url));

    const title=await page.title()

    console.log(("title is "+title));

    await expect(page).toHaveTitle("Google")

})

test.skip("my fourth test", async function({page}){
    
    const email="shalinipw8@gmail.com"

    await page.goto("https://ineuron-courses.vercel.app/")

    await page.goto("http://www.google.com")

    await page.goto("http://www.yahoo.com")

    await page.goBack()

    await page.goBack()

    //await page.getByText("Log in ").click()  

    const loginButton=page.getByText("Log in ");

    await loginButton.click()

    expect(await page.getByText("New user? Signup").getAttribute("class")).toContain("subLink")

    await page.getByText("New user? Signup").click()

    await page.locator("//input[@id='name']").type("Manoj")

    await page.locator("#email").type(email)

    await page.locator("#password").type(email)

    await page.getByLabel("Testing").first().click()

    await page.getByLabel("Male").check()

    await page.locator("//select[@id='state']").selectOption("Assam")

    await page.locator("//button[normalize-space()='Sign up']").click()

    //await page.pause()
    
    await page.locator("#email1").type(email)

    await page.locator("#password1").type(email)

    await page.locator("button[type='submit']").click()
    
    await page.getByText("Sign out").click()

    // put assertion here for logout using expect
    // create another test to verify email already exist

    await page.waitForSelector()

})


