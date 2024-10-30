// jest.config.js
module.exports = {
  preset: 'ts-jest',                    // Use ts-jest to compile TypeScript
  testEnvironment: 'jsdom',              // For DOM testing
  moduleNameMapper: {
    '\\.(css|scss|sass)$': 'identity-obj-proxy', // Mock CSS modules
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js', // Mock static files
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file for jest-dom
};
