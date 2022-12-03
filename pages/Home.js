class Home{

    constructor(page)
    {
        this.page=page
        this.loginButton=page.getByText("Log in")
    }

    async openApplication()
    {
        await this.page.goto("https://ineuron-courses.vercel.app")
    }

    async clickOnLoginButton()
    {
        await this.loginButton.click()
    }

}

module.exports=Home