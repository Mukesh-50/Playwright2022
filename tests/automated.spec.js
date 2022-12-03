import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 1080,
    width: 1920
  }
});

test('test', async ({ page }) => {

  await page.goto('https://ineuron-courses.vercel.app/');

  await page.getByRole('button', { name: 'Log in .linesandangles_een{fill:#ffffff;}' }).click();
  
  await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login');

  await page.getByPlaceholder('Email').click();

  await page.getByPlaceholder('Email').fill('ineuron@ineuron.ai');

  await page.getByPlaceholder('Password').click();

  await page.getByPlaceholder('Password').fill('ineuron');

  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL('https://ineuron-courses.vercel.app/');

  await page.getByRole('button', { name: 'Sign out' }).click();
  await expect(page).toHaveURL('https://ineuron-courses.vercel.app/login');

});