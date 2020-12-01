import { css } from '@emotion/react';
import { opacify } from 'polished';

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
