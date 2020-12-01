import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { math } from 'polished';

// Breakpoints https://tailwindcss.com/docs/breakpoints
export const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xl2: '1536px',
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
export const xl2 = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.xl, styles);

const sizeCache: Record<number, string | undefined> = {};
export function size(n: number) {
  const cachedResult = sizeCache[n];
  if (cachedResult === undefined) {
    const result = math(`0.25rem * ${n}`);
    sizeCache[n] = result;
    return result;
  } else {
    return cachedResult;
  }
}

export const disabled = (...styles: CSSInterpolation[]) =>
  css`
    &:disabled {
      ${css(styles)};
    }
  `;
export const hover = (...styles: CSSInterpolation[]) =>
  css`
    &:hover {
      ${css(styles)};
    }
  `;
export const focus = (...styles: CSSInterpolation[]) =>
  css`
    &:focus {
      ${css(styles)};
    }
  `;
export const active = (...styles: CSSInterpolation[]) =>
  css`
    &:active {
      ${css(styles)};
    }
  `;

// Dark Mode https://tailwindcss.com/docs/dark-mode
export const dark = (...styles: CSSInterpolation[]) =>
  css`
    .theme-dark & {
      ${css(styles)};
    }
    .theme-auto & {
      @media (prefers-color-scheme: dark) {
        ${css(styles)}
      }
    }
  `;
