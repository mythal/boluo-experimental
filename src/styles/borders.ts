import { css } from '@emotion/react';
import { opacify } from 'polished';
import { memoize } from './base';

const sm = '0.125rem';
const normal = '0.25rem';
const md = '0.375rem';
const lg = '0.5rem';
const xl = '0.75rem';
const xl2 = '1rem';
const xl3 = '1.5rem';
// Border Radius https://tailwindcss.com/docs/border-radius
export const roundedNone = css`
  border-radius: 0;
`;
export const roundedSm = css`
  border-radius: ${sm};
`;
export const rounded = css`
  border-radius: ${normal};
`;
export const roundedMd = css`
  border-radius: ${md};
`;
export const roundedLg = css`
  border-radius: ${lg};
`;
export const roundedXl = css`
  border-radius: ${xl};
`;
export const rounded2Xl = css`
  border-radius: ${xl2};
`;
export const rounded3Xl = css`
  border-radius: ${xl3};
`;
export const roundedFull = css`
  border-radius: 9999px;
`;

// Border Width https://tailwindcss.com/docs/border-width
export const border = css`
  border-width: 1px;
`;
export const border0 = css`
  border-width: 0;
`;
export const border2 = css`
  border-width: 2px;
`;
export const border4 = css`
  border-width: 4px;
`;
export const border8 = css`
  border-width: 8px;
`;
export const borderL = css`
  border-left-width: 1px;
`;
export const borderL0 = css`
  border-left-width: 0;
`;
export const borderL2 = css`
  border-left-width: 2px;
`;
export const borderL4 = css`
  border-left-width: 4px;
`;
export const borderL8 = css`
  border-left-width: 8px;
`;
export const borderR = css`
  border-right-width: 1px;
`;
export const borderR0 = css`
  border-right-width: 0;
`;
export const borderR2 = css`
  border-right-width: 2px;
`;
export const borderR4 = css`
  border-right-width: 4px;
`;
export const borderR8 = css`
  border-right-width: 8px;
`;
export const borderT = css`
  border-top-width: 1px;
`;
export const borderT0 = css`
  border-top-width: 0;
`;
export const borderT2 = css`
  border-top-width: 2px;
`;
export const borderT4 = css`
  border-top-width: 4px;
`;
export const borderT8 = css`
  border-top-width: 8px;
`;
export const borderB = css`
  border-bottom-width: 1px;
`;
export const borderB0 = css`
  border-bottom-width: 0;
`;
export const borderB2 = css`
  border-bottom-width: 2px;
`;
export const borderB4 = css`
  border-bottom-width: 4px;
`;
export const borderB8 = css`
  border-bottom-width: 8px;
`;
// Border Color https://tailwindcss.com/docs/border-color
export function borderColor(color: string, opacity = 100) {
  const finalColor = opacity >= 100 ? color : opacify(opacity / 100, color);
  return css`
    border-color: ${finalColor};
  `;
}

// Border Style https://tailwindcss.com/docs/border-style
export const borderSolid = css`
  border-style: solid;
`;
export const borderDashed = css`
  border-style: dashed;
`;
export const borderDotted = css`
  border-style: dotted;
`;
export const borderDouble = css`
  border-style: double;
`;
export const borderNone = css`
  border-style: none;
`;

// Divide Width https://tailwindcss.com/docs/divide-width
export const divideY = memoize(
  (n: number) => css`
    & > * + * {
      border-top-width: calc(${n}px);
    }
  `
);
export const divideYRev = memoize(
  (n: number) => css`
    & > * + * {
      border-bottom-width: calc(${n}px);
    }
  `
);

// Divide Color https://tailwindcss.com/docs/divide-color
export const divideTransparent = css`
  & > * + * {
    border-color: transparent;
  }
`;
export const divideCurrent = css`
  & > * + * {
    border-color: currentColor;
  }
`;
export const divideColor = memoize((color: string, opacity = 100) => {
  const finalColor = opacity >= 100 ? color : opacify(opacity / 100, color);
  return css`
    & > * + * {
      border-color: ${finalColor};
    }
  `;
});
// Divide Style https://tailwindcss.com/docs/divide-style
export const divideSolid = css`
  & > * + * {
    border-style: solid;
  }
`;
export const divideDashed = css`
  & > * + * {
    border-style: dashed;
  }
`;
export const divideDotted = css`
  & > * + * {
    border-style: dotted;
  }
`;
export const divideDobule = css`
  & > * + * {
    border-style: double;
  }
`;
export const divideNone = css`
  & > * + * {
    border-style: none;
  }
`;
