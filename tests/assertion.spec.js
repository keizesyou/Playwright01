const {test,expect} =require('@playwright/test');
const {chromium} = require('playwright');

let page,context;

test.only("assertion demo01",async ({}) => {

    let strobj='text=The Kitchen';
    let url ="https://kitchen.applitools.com/";
        const browser = await chromium.launch({
        headless: true,
        slowMo:1000,
        args: ['--ie-mode-force', '--internet-explorer-integration=iemode'],
        executablePath: 'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
      });
    
      context = await browser.newContext({
        recordVideo:{
        dir: 'test-results/videos/',
        size:{width:800,height:600}
        }
      });
      /*await context.tracing.start({
        screenshots: true, snapshots: true
      });*/
      page = await context.newPage();
    await page.goto(url);
    await expect.soft(page).toHaveScreenshot();
    /*await expect.soft(page).toHaveScreenshot(
    {fullpage:true
    });*/
    //await page.pause();
    await expect(page.getByRole('heading', { name: 'The Kitchen' })).toHaveCount(1);
    //await expect.soft(page.locator(strobj)).toBeHidden();
    await expect.soft(page.locator(strobj)).toHaveText(/.*Kitchen/);

    if(await page.$(strobj)){
        await page.getByRole('heading', { name: 'The Kitchen' }).click();
        await page.locator('//*[@id="__next"]/div/div/section/div/div/a[1]/h3').click();
    }

    await expect.soft(page).toHaveScreenshot();

}
)

test("assertion demo02",async ({page}) => {
    await page.goto("https://kitchen.applitools.com/");


}
)
