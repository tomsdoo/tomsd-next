const path = require("path");

module.exports = {
  moduleNameMapper: {
    "^@/routes/(.*)$": "<rootDir>/routes/$1"
  },
  transform: {
    "^.+\\.tsx?$": path.join(__dirname, "jest.babel.config.js")
  }
};
