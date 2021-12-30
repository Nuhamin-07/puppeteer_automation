const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const [page] = await browser.pages();
  await page.goto('https://google.com' );
  await page.type('.gLFyf.gsfi', 'JavaScript with puppeteer', {delay:100});
  await page.click('.gNO89b');
  await page.waitForSelector(".LC20lb", {visible: true});
  await Promise.all([
    page.waitForNavigation({waitUntil: "domcontentloaded"}),
    page.click(".LC20lb"),
  ]);

  await page.waitForTimeout(5000)
 await browser.close();
})();
