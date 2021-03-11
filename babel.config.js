const NODE_ENV = process.env['NODE_ENV'] ?? 'development';
const isTest = NODE_ENV === 'test';
const isDevelopment = NODE_ENV === 'development';

const presets = [
  "@babel/preset-typescript",
  ["@babel/preset-react", { "runtime": "automatic" }],
];

if (isTest) {
  presets.push(['@babel/preset-env', { targets: { node: 'current' } }])
}

const plugins = [];

if (isDevelopment) {
  plugins.push("react-refresh/babel")
}

if (isTest) {
  presets.push('@linaria');
}

module.exports = { presets, plugins };
