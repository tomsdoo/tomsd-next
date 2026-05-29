import nextConfig from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";
import storybookPlugin from "eslint-plugin-storybook";

const eslintConfig = [
  {
    ignores: ["storybook-static/**"],
  },
  ...nextConfig,
  ...nextTypescript,
  ...storybookPlugin.configs["flat/recommended"],
  {
    settings: {
      react: {
        version: "19",
      },
    },
  },
  {
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
  },
  {
    files: ["**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];

export default eslintConfig;
