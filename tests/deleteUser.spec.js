import { test, expect } from '@playwright/test';
const Home=require("../pages/Home")
const Login=require("../pages/Login")
const Dashboard=require("../pages/Dashboard")

test.skip("Delete User From Application",async function({page}){
    const home=new Home(page)
    const login=new Login(page)
    const dashboard=new Dashboard(page)
    await home.openApplication()
    await home.clickOnLoginButton()
    await login.loginToApplication("ineuron@ineuron.ai","ineuron")
    const count=await dashboard.deleteUser("vishal@gmail.com")
    expect(count).toBe(0)
})

test("Delete All User From Application",async function({page}){
    const home=new Home(page)
    const login=new Login(page)
    const dashboard=new Dashboard(page)
    await home.openApplication()
    await home.clickOnLoginButton()
    await login.loginToApplication("ineuron@ineuron.ai","ineuron")
    const count=await dashboard.deleteAllUser()
    expect(count).toBe(0)
})