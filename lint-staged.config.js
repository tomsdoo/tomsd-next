import path from "path";

const config = {
  "*.{ts,tsx,css}": [
    (filenames) => `prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(" ")}`,
  ],
};

export default config;
