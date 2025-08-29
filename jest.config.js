import path from "path";

export default {
  moduleNameMapper: {
    "^@/app/(.*)$": "<rootDir>/app/$1",
    "^@/apollo/(.*)$": "<rootDir>/apollo/$1",
    "^@/components/(.*)$": "<rootDir>/components/$1",
    "^@/layouts/(.*)$": "<rootDir>/layouts/$1",
    "^@/lib/(.*)$": "<rootDir>/lib/$1",
    "^@/modules/(.*)$": "<rootDir>/modules/$1",
    "^@/pages/(.*)$": "<rootDir>/pages/$1",
    "^@/routes/(.*)$": "<rootDir>/routes/$1",
    "\\.(css|scss)$": "<rootDir>/__mocks__/styleMock.js"
  },
  transform: {
    "^.+\\.tsx?$": path.join(import.meta.dirname, "jest.babel.config.js")
  }
};
