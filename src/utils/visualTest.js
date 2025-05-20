const puppeteer = require('puppeteer');

/**
 * Visual regression test helper utility
 */
const visualTest = {
  /**
   * Launch browser and create a new page
   */
  setup: async () => {
    const browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });
    const page = await browser.newPage();
    await page.setViewport({
      width: 1280,
      height: 720,
      deviceScaleFactor: 1,
    });
    return { browser, page };
  },

  /**
   * Close browser
   */
  teardown: async (browser) => {
    await browser.close();
  },

  /**
   * Take a screenshot of a component
   */
  takeScreenshot: async (page, url) => {
    await page.goto(url, { waitUntil: 'networkidle0' });
    return await page.screenshot();
  },

  /**
   * Take a screenshot of a specific element
   */
  takeElementScreenshot: async (page, url, selector) => {
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.waitForSelector(selector);
    const element = await page.$(selector);
    return await element.screenshot();
  },
};

module.exports = visualTest;