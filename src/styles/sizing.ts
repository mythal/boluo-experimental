import { css } from '@emotion/react';
import { breakpoint, size } from './base';

export const wAuto = css`
  width: auto;
`;
export const wPx = css`
  width: 1px;
`;
export const wMin = css`
  width: min-content;
`;
export const wMax = css`
  width: max-content;
`;
export const wFull = css`
  width: 100%;
`;
export const wScreen = css`
  width: 100vw;
`;
export const w0 = css`
  width: 0;
`;
export const w = (n: number) =>
  css`
    width: ${size(n)};
  `;
export const wRatio = (x: number, y: number) => {
  const percentage = (x / y) * 100;
  return css`
    width: ${percentage.toFixed(8)}%;
  `;
};

// Min-Width https://tailwindcss.com/docs/min-width
export const minW0 = css`
  min-width: 0;
`;
export const minW = (n: number) =>
  css`
    min-width: ${size(n)};
  `;
export const minWFull = css`
  min-width: 100%;
`;
export const minWMin = css`
  min-width: min-content;
`;
export const minWMax = css`
  min-width: max-content;
`;

// Max-Width https://tailwindcss.com/docs/max-width
export const maxW0 = css`
  max-width: 0;
`;
export const maxWNone = css`
  max-width: none;
`;
export const maxWXs = css`
  max-width: 20rem;
`;
export const maxWSm = css`
  max-width: 24rem;
`;
export const maxWMd = css`
  max-width: 28rem;
`;
export const maxWLg = css`
  max-width: 32rem;
`;
export const maxWXl = css`
  max-width: 36rem;
`;
export const maxW2Xl = css`
  max-width: 42rem;
`;
export const maxW3Xl = css`
  max-width: 48rem;
`;
export const maxW4Xl = css`
  max-width: 56rem;
`;
export const maxW5Xl = css`
  max-width: 64rem;
`;
export const maxW6Xl = css`
  max-width: 72rem;
`;
export const maxW7Xl = css`
  max-width: 80rem;
`;
export const maxWFull = css`
  max-width: 100%;
`;
export const maxWMin = css`
  max-width: min-content;
`;
export const maxWMax = css`
  max-width: max-content;
`;
export const maxWProse = css`
  max-width: 65ch;
`;
export const maxWScreenSm = css`
  max-width: ${breakpoint.sm};
`;
export const maxWScreenMd = css`
  max-width: ${breakpoint.md};
`;
export const maxWScreenLg = css`
  max-width: ${breakpoint.lg};
`;
export const maxWScreenXl = css`
  max-width: ${breakpoint.xl};
`;
export const maxWScreen2Xl = css`
  max-width: ${breakpoint.xl2};
`;

// Height https://tailwindcss.com/docs/height
export const hAuto = css`
  height: auto;
`;
export const hPx = css`
  height: 1px;
`;
export const hFull = css`
  height: 100%;
`;
export const hScreen = css`
  height: 100vh;
`;
export const h0 = css`
  height: 0;
`;
export const h = (n: number) =>
  css`
    height: ${size(n)};
  `;
export const hRatio = (x: number, y: number) => {
  const percentage = (x / y) * 100;
  return css`
    height: ${percentage.toFixed(8)}%;
  `;
};

// Min-Height https://tailwindcss.com/docs/min-height
export const minH0 = css`
  min-height: 0;
`;
export const minHFull = css`
  min-height: 100%;
`;
export const minHScreen = css`
  min-height: 100vh;
`;

// Max-Height https://tailwindcss.com/docs/max-height
export const maxH0 = css`
  max-height: 0;
`;
export const maxHPx = css`
  max-height: 1px;
`;
export const maxHFull = css`
  max-height: 100%;
`;
export const maxHScreen = css`
  max-height: 100vh;
`;
export const maxH = (n: number) =>
  css`
    max-height: ${size(n)};
  `;
