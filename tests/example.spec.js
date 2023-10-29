// @ts-check
const { test, expect } = require('@playwright/test');
const { chromium } = require('playwright');

test('has title', async ({ page, context }) => {

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

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Swag Labs');

  //await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  //await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  await context.tracing.stop({path:'mytrace.zip'});
});
