const { test, expect, chromium } = require("@playwright/test")

let page
let context
let browser

test.beforeAll(async function(){
     browser = await chromium.launch({ headless: false })
     context = await browser.newContext({ recordVideo: { dir: "./videos/" } })
     page = await context.newPage()

})

test.afterAll(async function(){
    await page.close()
    await context.close()
    await browser.close()
})

test('Another way to manager browser', async () => {
    await page.goto("https://ineuron-courses.vercel.app/login")
    await page.getByPlaceholder('Email').fill('shalinipw6@gmail.com');
    await page.getByPlaceholder('Password').fill('shalinipw6@gmail.com');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('https://ineuron-courses.vercel.app/');
    await page.getByRole('button', { name: 'Sign out' }).click();
    await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login');

});