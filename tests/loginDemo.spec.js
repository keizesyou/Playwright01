import {test,expect,chromium} from '@playwright/test'

test('loginDemo',async({ page}) =>
{
    await page.goto('https://demo.applitools.com');
    // await page.pause();
    await expect(page).toHaveTitle('ACME Demo App by Applitools');
    await page.waitForSelector('[Placeholder="Enter your username"]',5000);
    await page.getByPlaceholder('Enter your username').fill('xing');
    await page.getByPlaceholder('Enter your password').fill('1234');
    await page.getByRole('link', { name: 'Sign in' }).click;
 
    await expect(page.getByRole('link', { name: 'ACME' })).toBeVisible;
    await page.close();

})


