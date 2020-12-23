import { css } from '@emotion/react';
import { CSSInterpolation } from '@emotion/serialize';
import { math } from 'polished';
import { duration300, transitionColors } from './transitions';

// Breakpoints https://tailwindcss.com/docs/breakpoints
export const breakpoint = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  xl2: '1536px',
};

export const responsive = (breakPoint: string, ...styles: Array<CSSInterpolation>): CSSInterpolation => ({
  [`@media (min-width: ${breakPoint})`]: css(styles),
});

export const sm = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.sm, styles);
export const md = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.md, styles);
export const lg = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.lg, styles);
export const xl = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.xl, styles);
export const xl2 = (...styles: Array<CSSInterpolation>) => responsive(breakpoint.xl, styles);

const sizeCache: Record<number, string | undefined> = {};
export function size(n: number): string {
  const cachedResult = sizeCache[n];
  if (cachedResult === undefined) {
    const result = math(`0.25rem * ${n}`);
    sizeCache[n] = result;
    return result;
  } else {
    return cachedResult;
  }
}

export const disabled = (...styles: CSSInterpolation[]): CSSInterpolation => ({
  '&:disabled': css(styles),
});
export const hover = (...styles: CSSInterpolation[]): CSSInterpolation => ({
  '&:hover': css(styles),
});
export const focus = (...styles: CSSInterpolation[]): CSSInterpolation => ({
  '&:focus': css(styles),
});
export const active = (...styles: CSSInterpolation[]): CSSInterpolation => ({
  '&:active': css(styles),
});

// Dark Mode https://tailwindcss.com/docs/dark-mode
export const dark = (...styles: CSSInterpolation[]) => {
  const styles_ = css(styles);
  return css(transitionColors, duration300, {
    '[data-theme="dark"] &': styles_,
    '[data-theme="auto"] &': {
      '@media (prefers-color-scheme: dark)': styles_,
    },
  });
};

export const resetThemeClasses = () => {
  const html = document.documentElement;
  delete html.dataset['theme'];
};

export const switchToDark = () => {
  document.documentElement.dataset['theme'] = 'dark';
};

export const switchToLight = () => {
  document.documentElement.dataset['theme'] = 'light';
};

export const switchToAuto = () => {
  document.documentElement.dataset['theme'] = 'auto';
};

export function memoize<R, T extends (...args: any[]) => R>(f: T): T {
  const memory = new Map<string | number, R>();

  const g = (...args: any[]) => {
    let key: string | number;
    if (args.length === 1) {
      const arg = args[0];
      if (typeof arg === 'string' || typeof arg === 'number') {
        key = arg;
      }
      key = JSON.stringify(args);
    } else {
      key = JSON.stringify(args);
    }
    if (!memory.get(key)) {
      memory.set(key, f(...args));
    }
    return memory.get(key);
  };

  return g as T;
}
