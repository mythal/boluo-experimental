const presets = [
  "@babel/preset-typescript",
  ["@babel/preset-react", {
    "runtime": "automatic",
    "importSource": "@emotion/react",
  }],
];


module.exports = { presets, plugins: ["@emotion/babel-plugin"] };
