const{test,expect}= require("@playwright/test")


test("Wait For networkIdle State",async function({page}){

      await page.goto("https://ineuron-courses.vercel.app/login");

      await page.waitForTimeout(2000)

      await page.getByText("New user? Signup").click()

      await page.waitForLoadState("networkidle")

      const totalInterest=await page.locator("//label[@class='interest']").count()

      expect(totalInterest).toBe(4)

})
