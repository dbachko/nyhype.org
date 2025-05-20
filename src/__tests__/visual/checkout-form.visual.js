const visualTest = require('../../utils/visualTest');

describe('Checkout form visual regression', () => {
  let browser;
  let page;

  beforeAll(async () => {
    const setup = await visualTest.setup();
    browser = setup.browser;
    page = setup.page;
  });

  afterAll(async () => {
    await visualTest.teardown(browser);
  });

  it('should match checkout form snapshot', async () => {
    // Navigate to a product page first
    await page.goto('http://localhost:8000/');
    
    // Find and click on a product to navigate to product page
    await page.waitForSelector('.card');
    await page.click('.card a');
    
    // On product page, find and click buy button
    await page.waitForSelector('.btn-primary');
    await page.click('.btn-primary');
    
    // Wait for checkout form to load
    await page.waitForSelector('form');
    
    const image = await visualTest.takeScreenshot(page);
    expect(image).toMatchImageSnapshot();
  });
});