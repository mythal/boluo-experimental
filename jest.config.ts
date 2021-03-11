import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|webp|svg|ttf|woff|woff2|mp4|webm|css)$": "<rootDir>/src/assets/mocks.ts",
  }
};
export default config;
