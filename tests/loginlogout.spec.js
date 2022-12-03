import { test, expect } from '@playwright/test';

test('@Smoke Login Logout', async ({ page }) => {

  await page.goto('https://ineuron-courses.vercel.app/');

  await page.getByText("Log in").click()

  await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login');

  await page.getByPlaceholder('Email').fill('shalinipw6@gmail.com');

  await page.getByPlaceholder('Password').fill('shalinipw6@gmail.com');

  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('https://ineuron-courses.vercel.app/');

  await page.getByRole('button', { name: 'Sign out' }).click();
  await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login');

});