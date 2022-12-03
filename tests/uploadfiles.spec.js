const{test,expect}= require("@playwright/test")


test.skip("Upload file using input tag",async function({page}){

    const file1="./tests/fixtures/file.js"
    const file2="./tests/fixtures/file.js"
    const file3="./tests/fixtures/file.js"

    await page.goto("file:///Users/mukeshotwani/Desktop/PlaywrightSample.html")

    await page.locator("//input").setInputFiles(file1)
    //await page.locator("//input").setInputFiles([file1,file2,file3])

    //await page.pause()

})

test("Upload file using without input tag",async function({page}){

    const file1="./tests/fixtures/file.js"

    await page.goto("https://the-internet.herokuapp.com/upload")

    page.on("filechooser",async (filechoose)=>{
        await filechoose.setFiles(file1)
    })
    await page.locator("#drag-drop-upload").click({force:true})

    await page.waitForTimeout()

    await page.pause()

})