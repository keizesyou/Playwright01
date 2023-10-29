const {test,expect} =require('@playwright/test');
const {chromium} = require('playwright');

let page,context;
test('FindingObjects', async ({ }) => {

    const browser = await chromium.launch({
      headless: false,
      args: ['--ie-mode-force', '--internet-explorer-integration=iemode'],
      executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
    });
  
    context = await browser.newContext();
    await context.tracing.start({
      screenshots: true, snapshots: true
    });
    page = await context.newPage();
    await page.goto('https://saucedemo.com/');
    //await page.pause();
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Swag Labs/);

    //await page.locator('[data-test="username"]').click();
    //await page.locator('[data-test="username"]').fill('standard');
    /* await page.locator('[data-test="username"]').click({
      modifiers: ['Shift']
    });*/
    await page.locator('[data-test="username"]').fill('standard_user');
    //await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    await expect(page.locator("xpath=//span[@class='title']")).toHaveText('Products1');
    // await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    // await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
    await context.tracing.stop({path:'mytrace.zip'});
  });

