class Login{

    constructor(page)
    {
        this.page=page
        this.username=page.locator("#email1")
        this.password=page.locator("#password1")
        this.signInButton=page.getByText("Sign in")
    }

    async loginToApplication(uname,pass)
    {
        await this.username.type(uname)
        await this.password.type(pass)
        await this.signInButton.nth(1).click()
    }

}
module.exports=Login
