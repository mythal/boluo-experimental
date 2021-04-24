// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: { url: '/' },
  },
  packageOptions: {
    knownEntrypoints: [
      'react/jsx-runtime',
      '@emotion/react/jsx-runtime',
    ],
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    "@snowpack/plugin-babel",
  ],
  routes: [
    {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
