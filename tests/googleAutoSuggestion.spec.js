const{test,expect}= require("@playwright/test")


test.skip("Handle Auto Complete using textContents with forEach",async function({page}){

    await page.goto("https://www.google.com/")

    await page.locator("//input[@name='q']").type("Mukesh Otwani",{delay:200})

    const elements=await page.locator("//div[@role='option']")

    console.log(await elements.count());

    const values=await elements.allTextContents()

    values.forEach(function(value,i,arr){
        console.log(value);

        if(value.includes("api"))
        {
            elements.nth(i).click()
        }
    })
    expect(page).toHaveTitle(/.*api/)

})

test("@Smoke Handle Auto Complete without allTextContents",async function({page}){

    await page.goto("https://www.google.com/")

    await page.locator("//input[@name='q']").type("Mukesh Otwani",{delay:200})

    const elements=await page.locator("//div[@role='option']")

    const count=await elements.count();

    console.log("Total Count "+count);

    for(let i=0;i<count;i++)
    {
         const textValue=await elements.nth(i).textContent()
         
         console.log("value is "+textValue);

         if(textValue.includes("api"))
         {
            elements.nth(i).click()
            break
         }
         
    }
   
    expect(page).toHaveTitle(/.*api/)

})