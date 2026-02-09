import path from "path";

export default {
  "*.{ts,tsx,css}": [
    (filenames) => `prettier --write ${filenames.map(f => path.relative(process.cwd(), f)).join(" ")}`,
  ],
};
