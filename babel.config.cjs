const presets = [
  '@babel/preset-typescript',
  [
    '@babel/preset-react',
    {
      runtime: 'automatic',
      importSource: '@emotion/react',
    },
  ],
];

const plugins = ['@emotion/babel-plugin'];

if (process.env.NODE_ENV === 'development') {
  plugins.push('react-refresh/babel');
}

module.exports = { presets, plugins };
