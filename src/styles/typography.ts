import { css } from '@emotion/react';
import { alpha, memoize, size } from './base';
import { Property } from 'csstype';

// Text Color https://tailwindcss.com/docs/text-color
export const textColor = memoize((color: Property.Color, a = 100) => {
  return css`
    color: ${alpha(color, a)};
  `;
});
export const textTransparent = css`
  color: transparent;
`;
export const textCurrentColor = css`
  color: currentColor;
`;

// Font Style https://tailwindcss.com/docs/font-style
export const italic = css`
  font-style: italic;
`;
export const notItalic = css`
  font-style: normal;
`;

// Letter Spacing https://tailwindcss.com/docs/letter-spacing
export const trackingTighter = css`
  letter-spacing: -0.05em;
`;
export const trackingTight = css`
  letter-spacing: -0.025em;
`;
export const trackingNormal = css`
  letter-spacing: 0;
`;
export const trackingWide = css`
  letter-spacing: 0.025em;
`;
export const trackingWider = css`
  letter-spacing: 0.05em;
`;
export const trackingWidest = css`
  letter-spacing: 0.1em;
`;

// Line Height https://tailwindcss.com/docs/line-height
export const leadingNone = css`
  line-height: 1;
`;
export const leadingTight = css`
  line-height: 1.25;
`;
export const leadingSnug = css`
  line-height: 1.375;
`;
export const leadingNorma = css`
  line-height: 1.5;
`;
export const leadingRelaxed = css`
  line-height: 1.625;
`;
export const leadingLoose = css`
  line-height: 2;
`;
export const leading = (n: number) =>
  css`
    line-height: ${size(n)};
  `;

// Font Family https://tailwindcss.com/docs/font-family
export const fontSans = css`
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;
export const fontSerif = css`
  font-family: ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;
`;
export const fontMono = css`
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;
`;

// Word Break https://tailwindcss.com/docs/word-break
export const breakNormal = css`
  overflow-wrap: normal;
  word-break: normal;
`;
export const breakWords = css`
  overflow-wrap: break-word;
`;
export const breakAll = css`
  word-break: break-all;
`;

// Font Smoothing https://tailwindcss.com/docs/font-smoothing
export const antialiased = css`
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;
export const subpixelAntialiased = css`
  -webkit-font-smoothing: subpixel-antialiased;
  -moz-osx-font-smoothing: auto;
`;

// Text Alignment https://tailwindcss.com/docs/text-align
export const textLeft = css`
  text-align: left;
`;
export const textRight = css`
  text-align: right;
`;
export const textCenter = css`
  text-align: center;
`;
export const textJustify = css`
  text-align: justify;
`;

// Font Size https://tailwindcss.com/docs/font-size
export const textBase = css`
  font-size: 1rem;
  line-height: 1.5rem;
`;
export const textXs = css`
  font-size: 0.75rem;
  line-height: 1rem;
`;
export const textSm = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
`;
export const textLg = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
`;
export const textXl = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
`;
export const text2Xl = css`
  font-size: 1.5rem;
  line-height: 2rem;
`;
export const text3Xl = css`
  font-size: 1.875rem;
  line-height: 2.25rem;
`;

// Text Decoration https://tailwindcss.com/docs/text-decoration
export const underline = css`
  text-decoration: underline;
`;
export const lineThrough = css`
  text-decoration: line-through;
`;
export const noUnderline = css`
  text-decoration: none;
`;

// Font Weight https://tailwindcss.com/docs/font-weight
export const fontThin = css`
  font-weight: 100;
`;
export const fontExtralight = css`
  font-weight: 200;
`;
export const fontNormal = css`
  font-weight: 400;
`;
export const fontMedium = css`
  font-weight: 500;
`;
export const fontSemibold = css`
  font-weight: 600;
`;
export const fontBold = css`
  font-weight: 700;
`;
export const fontExtrabold = css`
  font-weight: 800;
`;
export const fontBlack = css`
  font-weight: 900;
`;

// List Style Type https://tailwindcss.com/docs/list-style-type
export const listNone = css`
  list-style-type: none;
`;
export const listDisc = css`
  list-style-type: disc;
`;
export const listSquare = css`
  list-style-type: square;
`;
export const listDecimal = css`
  list-style-type: decimal;
`;

// List Style Position https://tailwindcss.com/docs/list-style-position
export const listInside = css`
  list-style-position: inside;
`;
export const listOutside = css`
  list-style-position: outside;
`;

// Text Transform https://tailwindcss.com/docs/text-transform
export const uppercase = css`
  text-transform: uppercase;
`;
export const lowercase = css`
  text-transform: lowercase;
`;
export const capitalize = css`
  text-transform: capitalize;
`;
export const normalCase = css`
  text-transform: none;
`;

// Text Overflow https://tailwindcss.com/docs/text-overflow
export const truncate = css`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
export const overflowEllipsis = css`
  text-overflow: ellipsis;
`;
export const overflowClip = css`
  text-overflow: clip;
`;

// Whitespace https://tailwindcss.com/docs/whitespace
export const whitespaceNormal = css`
  white-space: normal;
`;
export const whitespaceNowrap = css`
  white-space: nowrap;
`;
export const whitespacePre = css`
  white-space: pre;
`;
export const whitespacePreLine = css`
  white-space: pre-line;
`;
export const whitespacePreWrap = css`
  white-space: pre-wrap;
`;

// Placeholder Color https://tailwindcss.com/docs/placeholder-color
export const placeholderColor = memoize((color: string, a = 100) => {
  return css`
    &::placeholder {
      color: ${alpha(color, a)};
    }
  `;
});

// Vertical Alignment https://tailwindcss.com/docs/vertical-align
export const alignBaseline = css`
  vertical-align: baseline;
`;
export const alignTop = css`
  vertical-align: top;
`;
export const alignMiddle = css`
  vertical-align: middle;
`;
export const alignBottom = css`
  vertical-align: bottom;
`;
export const alignTextTop = css`
  vertical-align: text-top;
`;
export const alignTextBottom = css`
  vertical-align: text-bottom;
`;
