const packageJson = require(require("path").join(__dirname, "./package.json"));

module.exports = async (phase, { defaultConfig }) => {
  const nextConfig = {
    publicRuntimeConfig: {
      version: packageJson.version
    }
  };
  return nextConfig;
};
