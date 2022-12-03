const{test,expect}= require("@playwright/test")

test("handle js alert", async function({page}){

await page.goto("https://the-internet.herokuapp.com/javascript_alerts")

await page.on("dialog",function(jsdialog){
    jsdialog.accept()
})

await page.getByText("Click for JS Alert").click()

expect(await page.locator("#result").isVisible()).toBeTruthy()

})

test("handle js alert and capture text", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    
    await page.on("dialog",function(jsdialog){
        jsdialog.accept()
    })
    
    await page.getByText("Click for JS Alert").click()

    const msg=await page.locator("#result").textContent() 
    
    expect(msg.includes("successfully clicked an alert")).toBeTruthy()
    
    })


test("handle js alert and capture text of alert", async function({page}){

        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
        
        await page.on("dialog",function(jsdialog)
        {
            expect(jsdialog.message()).toContain("I am a JS Confirm")
            jsdialog.accept()
        })
        
        await page.getByText("Click for JS Confirm").click()
    
        const msg=await page.locator("#result").textContent() 
        
        expect(msg.includes("You clicked: Ok")).toBeTruthy()
        
        })

test("dismiss js alert and capture text of alert", async function({page}){

            await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
            
            await page.on("dialog",function(jsdialog)
            {
                expect(jsdialog.message()).toContain("I am a JS Confirm")
                jsdialog.dismiss()
            })
            
            await page.getByText("Click for JS Confirm").click()
        
            const msg=await page.locator("#result").textContent() 
            
            expect(msg.includes("You clicked: Cancel")).toBeTruthy()
            
})  

test("enter js prompt values and capture text of prompt", async function({page}){

    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    
    await page.on("dialog",function(jsdialog)
    {
        expect(jsdialog.message()).toContain("I am a JS prompt")
        jsdialog.accept("Playwright")
    })
    
    await page.getByText("Click for JS Prompt").click()

    const msg=await page.locator("#result").textContent() 
    
    expect(msg.includes("Playwright")).toBeTruthy()
    
})  

    