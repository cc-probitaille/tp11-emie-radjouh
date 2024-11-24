require('dotenv').config();

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "/node_modules/",
    "/.history/"
  ],
  setupFiles: ['<rootDir>/jest.setup.js'],
};