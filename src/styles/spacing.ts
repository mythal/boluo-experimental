import { css } from '@emotion/react';
import { memoize, size } from './base';

// Margin https://tailwindcss.com/docs/margin

export const mx = memoize(
  (n: number) => css`
    margin-left: ${size(n)};
    margin-right: ${size(n)};
  `
);

export const mxAuto = css`
  margin-left: auto;
  margin-right: auto;
`;

export const my = memoize(
  (n: number) => css`
    margin-top: ${size(n)};
    margin-bottom: ${size(n)};
  `
);

export const myAuto = css`
  margin-top: auto;
  margin-bottom: auto;
`;

export const m = memoize(
  (n: number) => css`
    margin: ${size(n)};
  `
);

export const mAuto = css`
  margin: auto;
`;

export const mt = memoize(
  (n: number) => css`
    margin-top: ${size(n)};
  `
);

export const mtAuto = css`
  margin-top: auto;
`;

export const mr = memoize(
  (n: number) => css`
    margin-right: ${size(n)};
  `
);

export const mrAuto = css`
  margin-right: auto;
`;

export const mb = memoize(
  (n: number) => css`
    margin-bottom: ${size(n)};
  `
);

export const mbAuto = css`
  margin-bottom: auto;
`;

export const ml = memoize(
  (n: number) => css`
    margin-left: ${size(n)};
  `
);

export const mlAuto = css`
  margin-left: auto;
`;

// Padding https://tailwindcss.com/docs/padding

export const px = memoize(
  (n: number) => css`
    padding-left: ${size(n)};
    padding-right: ${size(n)};
  `
);

export const pxPx = css`
  padding-left: 1px;
  padding-right: 1px;
`;

export const py = memoize(
  (n: number) => css`
    padding-top: ${size(n)};
    padding-bottom: ${size(n)};
  `
);

export const pyPx = css`
  padding-top: 1px;
  padding-bottom: 1px;
`;

export const p = memoize(
  (n: number) => css`
    padding: ${size(n)};
  `
);

export const pPx = css`
  padding: 1px;
`;

export const pt = memoize(
  (n: number) => css`
    padding-top: ${size(n)};
  `
);

export const ptPx = css`
  padding-top: 1px;
`;

export const pr = memoize(
  (n: number) => css`
    padding-right: ${size(n)};
  `
);

export const prPx = css`
  padding-right: 1px;
`;

export const pb = memoize(
  (n: number) => css`
    padding-bottom: ${size(n)};
  `
);

export const pbPx = css`
  padding-bottom: 1px;
`;

export const pl = memoize(
  (n: number) => css`
    padding-left: ${size(n)};
  `
);

export const plPx = css`
  padding-left: 1px;
`;

// Space Between https://tailwindcss.com/docs/space
export const spaceY0 = my(0);
export const spaceY = memoize(
  (n: number) => css`
    & > * + * {
      margin-top: ${size(n)};
    }
  `
);
export const spaceYRev = memoize(
  (n: number) => css`
    & > * + * {
      margin-bottom: ${size(n)};
    }
  `
);
export const spaceX0 = mx(0);
export const spaceX = memoize(
  (n: number) => css`
    & > * + * {
      margin-left: ${size(n)};
    }
  `
);
export const spaceXRev = memoize(
  (n: number) => css`
    & > * + * {
      margin-right: ${size(n)};
    }
  `
);
