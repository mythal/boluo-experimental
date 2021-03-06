import { css } from '@emotion/react';

// Flex Direction https://tailwindcss.com/docs/flex-direction
export const flexRow = css`
  flex-direction: row;
`;
export const flexRowRev = css`
  flex-direction: row-reverse;
`;
export const flexCol = css`
  flex-direction: column;
`;
export const flexColReverse = css`
  flex-direction: column-reverse;
`;

// Flex Wrap https://tailwindcss.com/docs/flex-wrap
export const flexWrap = css`
  flex-wrap: wrap;
`;
export const flexWrapRev = css`
  flex-wrap: wrap-reverse;
`;
export const flexNowrap = css`
  flex-wrap: nowrap;
`;

// Flex https://tailwindcss.com/docs/flex
export const flex1 = css`
  flex: 1 1 0;
`;
export const flexAuto = css`
  flex: 1 1 auto;
`;
export const flexInitial = css`
  flex: 0 1 auto;
`;
export const flexNone = css`
  flex: none;
`;

// Flex Grow https://tailwindcss.com/docs/flex-grow
export const flexGrow0 = css`
  flex-grow: 0;
`;
export const flexGrow = css`
  flex-grow: 1;
`;

// Flex Shrink https://tailwindcss.com/docs/flex-shrink
export const flexShrink0 = css`
  flex-shrink: 0;
`;
export const flexShrink = css`
  flex-shrink: 1;
`;

// Order https://tailwindcss.com/docs/order
export const order = (n: number) =>
  css`
      order: ${n};
  `;
export const orderFirst = css`
  order: -9999;
`;
export const orderLast = css`
  order: 9999;
`;
export const orderNone = css`
  order: 0;
`;
