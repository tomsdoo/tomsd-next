const path = require("path");

module.exports = {
  "**/*/*.{js,jsx,ts,tsx}": [
    (filenames) => `next lint --file ${filenames.map(f => path.relative(process.cwd(), f)).join(" --file ")}`,
    "prettier --write"
  ]
};
