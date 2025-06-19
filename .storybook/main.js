const path = require("path");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

module.exports = {
  typescript: { reactDocgen: false },

  stories: ["../stories/**/*.mdx", "../stories/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
  ],

  webpackFinal: async (config, { configType }) => {
    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ...[".ts", ".tsx", ".js", ".css", ".scss"],
    ];

    config.resolve.fallback = {
      ...(config.resolve.fallback ?? {}),
      ...{
        fs: false,
        path: false,
      },
    };

    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      new TsconfigPathsPlugin(),
    ];

    return config;
  },

  framework: {
    name: "@storybook/nextjs",
    options: {},
  },

  docs: {},
};
