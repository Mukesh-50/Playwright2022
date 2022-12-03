import { test, expect } from '@playwright/test';

const multipleData=[{
  "id":1,
  "username":"ineuron@ineuron.ai",
  "password":"ineuron"
},
{
  "id":2,
  "username":"sample9@gmail.com",
  "password":"Mukesh@1234"
},
{
  "id":3,
  "username":"testuser101@gmail.com",
  "password":"Mukesh@1234"
}
]

for(const data of multipleData)
{
  test(`Login Logout ${data.id}`, async ({ page }) => {

    await page.goto('https://ineuron-courses.vercel.app/');
  
    await page.getByText("Log in").click()
  
    await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login');
  
    await page.getByPlaceholder('Email').type(data.username)
  
    await page.getByPlaceholder('Password').type(data.password)
  
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL('https://ineuron-courses.vercel.app/');
  
    await page.getByRole('button', { name: 'Sign out' }).click();
    await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login');
  
  });
}



