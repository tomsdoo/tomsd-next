const path = require("path");

module.exports = {
  moduleNameMapper: {
    "^@/modules/(.*)$": "<rootDir>/modules/$1",
    "^@/routes/(.*)$": "<rootDir>/routes/$1"
  },
  transform: {
    "^.+\\.tsx?$": path.join(__dirname, "jest.babel.config.js")
  }
};
