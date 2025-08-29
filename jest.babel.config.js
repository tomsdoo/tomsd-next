import babelJest from "babel-jest";

const babelOptions = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    ['@babel/preset-react', { runtime: "automatic" }],
    '@babel/preset-typescript',
  ]
};
export default babelJest.createTransformer(babelOptions);
