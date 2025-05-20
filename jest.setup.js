const { configureToMatchImageSnapshot } = require('jest-image-snapshot');

const customConfig = {
  customDiffConfig: {
    threshold: 0.2,
  },
  failureThreshold: 0.05,
  failureThresholdType: 'percent',
};

expect.extend({
  toMatchImageSnapshot: configureToMatchImageSnapshot(customConfig),
});