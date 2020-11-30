import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';

export const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};

export const responsive = (breakPoint: string, ...styles: Array<CSSInterpolation>) =>
  css`
    @media (min-width: ${breakPoint}) {
      ${styles}
    }
  `;
export const sm = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.sm, styles);
export const md = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.md, styles);
export const lg = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.lg, styles);
export const xl = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.xl, styles);
