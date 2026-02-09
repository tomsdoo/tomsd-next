import { fixupPluginRules } from "@eslint/compat";
import nextPlugin from "@next/eslint-plugin-next";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import jsxA11yPlugin from "eslint-plugin-jsx-a11y";
import storybookPlugin from "eslint-plugin-storybook";
import typescriptEslint from "typescript-eslint";
import globals from "globals";

const eslintConfig = [
  {
    ignores: [".next/**", "node_modules/**", "storybook-static/**"],
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
  },
  ...typescriptEslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  {
    plugins: {
      react: fixupPluginRules(reactPlugin),
      "react-hooks": fixupPluginRules(reactHooksPlugin),
      "jsx-a11y": fixupPluginRules(jsxA11yPlugin),
      "@next/next": fixupPluginRules(nextPlugin),
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs["core-web-vitals"].rules,
      "@next/next/no-img-element": "off",
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@typescript-eslint/semi": "off",
      "@typescript-eslint/quotes": "off",
      "@typescript-eslint/comma-dangle": "off",
      "@typescript-eslint/space-before-function-paren": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.stories.{js,jsx,ts,tsx}"],
    plugins: {
      storybook: fixupPluginRules(storybookPlugin),
    },
    rules: {
      ...storybookPlugin.configs.recommended.overrides[0].rules,
    },
  },
];

export default eslintConfig;
