const path = require("path");

module.exports = {
  moduleNameMapper: {
    "^@/apollo/(.*)$": "<rootDir>/apollo/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "@/layouts/(.*)$": "<rootDir>/layouts/$1",
    "^@/modules/(.*)$": "<rootDir>/modules/$1",
    "^@/routes/(.*)$": "<rootDir>/routes/$1",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  transform: {
    "^.+\\.tsx?$": path.join(__dirname, "jest.babel.config.js")
  }
};
