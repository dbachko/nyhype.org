const visualTest = require('../../utils/visualTest');

describe('Homepage visual regression', () => {
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

  it('should match homepage snapshot', async () => {
    const image = await visualTest.takeScreenshot(page, 'http://localhost:8000/');
    expect(image).toMatchImageSnapshot();
  });
});