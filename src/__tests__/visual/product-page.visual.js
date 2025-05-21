const visualTest = require('../../utils/visualTest');

describe('Product page visual regression', () => {
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

  it('should match product page snapshot', async () => {
    // Navigate to homepage
    await page.goto('http://localhost:8000/');
    
    // Find and click on a product to navigate to product page
    await page.waitForSelector('.card');
    await page.click('.card a');
    
    // Wait for product page to load
    await page.waitForSelector('.product-details');
    
    const image = await visualTest.takeScreenshot(page);
    expect(image).toMatchImageSnapshot();
  });

  it('should match product image snapshot', async () => {
    // Navigate to homepage
    await page.goto('http://localhost:8000/');
    
    // Find and click on a product to navigate to product page
    await page.waitForSelector('.card');
    await page.click('.card a');
    
    // Wait for product page to load and take screenshot of the product image
    await page.waitForSelector('.product-image');
    
    const image = await visualTest.takeElementScreenshot(page, null, '.product-image');
    expect(image).toMatchImageSnapshot();
  });
});