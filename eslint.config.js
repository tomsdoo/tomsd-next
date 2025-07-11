import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript"],
    parserOptions: {
      project: "./tsconfig.json",
    },
    rules: {
      "@next/next/no-img-element": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off"
    },
  }),
  ...compat.config({
    extends: ["plugin:storybook/recommended"],
  }),
];

export default eslintConfig;
