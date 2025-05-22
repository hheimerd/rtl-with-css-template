module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.css$": ["jest-transform-css", { modules: true }],
    },
    testEnvironment: "jsdom",
    moduleFileExtensions: ["js", "jsx"],
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"]
  };