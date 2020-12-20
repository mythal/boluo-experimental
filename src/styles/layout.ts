import { css } from '@emotion/react';
import { memoize, size } from './base';

// Position https://tailwindcss.com/docs/position
export const staticPosition = css`
  position: static;
`;
export const fixed = css`
  position: fixed;
`;
export const absolute = css`
  position: absolute;
`;
export const relative = css`
  position: relative;
`;
export const sticky = css`
  position: sticky;
`;

// Box Sizing https://tailwindcss.com/docs/box-sizing
export const boxBorder = css`
  box-sizing: border-box;
`;
export const boxContent = css`
  box-sizing: content-box;
`;

// Display https://tailwindcss.com/docs/display
export const hidden = css`
  display: none;
`;
export const block = css`
  display: block;
`;
export const inlineBlock = css`
  display: inline-block;
`;
export const flex = css`
  display: flex;
`;
export const inlineFlex = css`
  display: inline-flex;
`;
export const grid = css`
  display: grid;
`;
export const inlineGrid = css`
  display: inline-grid;
`;
// ...

// Float https://tailwindcss.com/docs/float
export const floatRight = css`
  float: right;
`;
export const floatLeft = css`
  float: left;
`;
export const floatNone = css`
  float: none;
`;

// Clear https://tailwindcss.com/docs/clear
export const clearLeft = css`
  clear: left;
`;
export const clearRight = css`
  clear: right;
`;
export const clearBoth = css`
  clear: both;
`;
export const clearNone = css`
  clear: none;
`;

// Object Fit https://tailwindcss.com/docs/object-fit
export const objectContain = css`
  object-fit: contain;
`;
export const objectCover = css`
  object-fit: cover;
`;
export const objectFill = css`
  object-fit: fill;
`;
export const objectNone = css`
  object-fit: none;
`;
export const objectScaleDown = css`
  object-fit: scale-down;
`;

// Object Position https://tailwindcss.com/docs/object-position
export const objectBottom = css`
  object-position: bottom;
`;
export const objectCenter = css`
  object-position: center;
`;
export const objectLeft = css`
  object-position: left;
`;
export const objectLeftBottom = css`
  object-position: left bottom;
`;
export const objectLeftTop = css`
  object-position: left top;
`;
export const objectRight = css`
  object-position: right;
`;
export const objectRightBottom = css`
  object-position: right bottom;
`;
export const objectRightTop = css`
  object-position: right top;
`;
export const objectTop = css`
  object-position: top;
`;

// Overflow https://tailwindcss.com/docs/overflow
export const overflowAuto = css`
  overflow: auto;
`;
export const overflowHidden = css`
  overflow: hidden;
`;
export const overflowVisible = css`
  overflow: visible;
`;
export const overflowScroll = css`
  overflow: scroll;
`;
export const overflowXAuto = css`
  overflow-x: auto;
`;
export const overflowYAuto = css`
  overflow-y: auto;
`;
export const overflowXHidden = css`
  overflow-x: hidden;
`;
export const overflowYHidden = css`
  overflow-y: hidden;
`;
export const overflowXVisible = css`
  overflow-x: visible;
`;
export const overflowYVisible = css`
  overflow-y: visible;
`;
export const overflowXScroll = css`
  overflow-x: scroll;
`;
export const overflowYScroll = css`
  overflow-y: scroll;
`;

// Overscroll Behavior https://tailwindcss.com/docs/overscroll-behavior
export const overscrollAuto = css`
  overscroll-behavior: auto;
`;
export const overscrollContain = css`
  overscroll-behavior: contain;
`;
export const overscrollNone = css`
  overscroll-behavior: none;
`;
// ...

// Top / Right / Bottom / Left https://tailwindcss.com/docs/top-right-bottom-left
export const inset = memoize(
  (n: number) => css`
    top: ${size(n)};
    right: ${size(n)};
    bottom: ${size(n)};
    left: ${size(n)};
  `
);
export const insetX = memoize(
  (n: number) => css`
    right: ${size(n)};
    left: ${size(n)};
  `
);
export const insetY = memoize(
  (n: number) => css`
    top: ${size(n)};
    bottom: ${size(n)};
  `
);
export const top = memoize(
  (n: number) => css`
    top: ${size(n)};
  `
);
export const right = memoize(
  (n: number) => css`
    right: ${size(n)};
  `
);
export const bottom = memoize(
  (n: number) => css`
    bottom: ${size(n)};
  `
);
export const left = memoize(
  (n: number) => css`
    left: ${size(n)};
  `
);

// Visibility https://tailwindcss.com/docs/visibility
export const visible = css`
  visibility: visible;
`;
export const invisible = css`
  visibility: hidden;
`;

// Z-Index https://tailwindcss.com/docs/z-index
export const z0 = css`
  z-index: 0;
`;
export const z10 = css`
  z-index: 10;
`;
export const z20 = css`
  z-index: 20;
`;
export const z30 = css`
  z-index: 30;
`;
export const z40 = css`
  z-index: 40;
`;
export const z50 = css`
  z-index: 50;
`;
export const zAuto = css`
  z-index: auto;
`;
export const zIndex = memoize(
  (x: number) =>
    css`
      z-index: ${x};
    `
);
