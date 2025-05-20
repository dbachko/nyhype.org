module.exports = {
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testEnvironment: `jsdom`,
  setupFilesAfterEnv: [`<rootDir>/jest.setup.js`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  collectCoverage: false,
  coverageReporters: ["lcov", "text", "html"],
};