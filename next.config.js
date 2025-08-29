import packageJson from "./package.json" with { type: "json" };

export default async (phase, { defaultConfig }) => {
  const nextConfig = {
    publicRuntimeConfig: {
      version: packageJson.version,
    }
  };
  return nextConfig;
};
