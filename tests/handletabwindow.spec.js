const{test,expect}= require("@playwright/test")


test("handle tabs/windows",async function({browser}){

        const context= await browser.newContext()

        const page= await context.newPage()

        await page.goto("https://ineuron-courses.vercel.app/login")

        const [newPage]=await Promise.all(
            [
                context.waitForEvent("page"),
                page.locator("//a[@href='https://twitter.com/iNeuronAi']//img").click()
            ]
        )
        const url=await newPage.url()
        console.log("new page url "+url);

        const newemail=url.split("com")[1].substring(1)

        await page.locator("#email1").type(newemail)

        await page.pause()



})