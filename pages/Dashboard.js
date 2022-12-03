class Dashboard{

    constructor(page)
    {
        this.page=page
        this.manage=page.getByText("Manage")
        this.manageUser=page.getByText("Manage Users")
    }

    async deleteUser(userForDeletion)
    {
        await this.manage.nth(0).hover()
        await this.page.waitForTimeout(2000)
        await this.manageUser.click()
        await this.page.locator("html").click()
        const button=this.page.locator("//td[text()='"+userForDeletion+"']//following::button[2]")
        await button.click()
        await this.page.waitForLoadState("networkidle")
        const elementCount=await button.count()
        return elementCount
    }

    async deleteAllUser()
    {
        await this.manage.nth(0).hover()
        await this.page.waitForTimeout(2000)
        await this.manageUser.click()
        await this.page.locator("html").click()
        await this.page.waitForSelector("//button[text()='Delete']")
        const deleteButton=this.page.locator("//button[text()='Delete']")
        const count=await deleteButton.count()

        console.log("Total count of delete button "+count);

        for(let i=0;i<count;i++)
        {   
               //await this.page.waitForLoadState("domcontentloaded")
               console.log("User deletion "+i); 
               await deleteButton.nth(i).click() 
               //await this.page.waitForLoadState("networkidle")
        }

        return await this.page.locator("//button[text()='Delete']").count()   
    }



}

module.exports=Dashboard