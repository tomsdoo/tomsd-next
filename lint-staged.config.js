import path from "path";

export default {
  "*.{ts,tsx,css}": [
    (filenames) => `next lint --file ${filenames.map(f => path.relative(process.cwd(), f)).join(" --file ")}`,
    "prettier --write",
  ],
};
