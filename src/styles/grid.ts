import { css } from '@emotion/react';
import { size } from './base';

// Gap https://tailwindcss.com/docs/gap
export const gap = (n: number) =>
  css`
    gap: ${size(n)};
  `;
export const gapPx = css`
  gap: 1px;
`;
export const gap0 = gap(0);
export const gapX = (n: number) =>
  css`
    column-gap: ${size(n)};
  `;
export const gapXPx = css`
  column-gap: 1px;
`;
export const gapY = (n: number) =>
  css`
    row-gap: ${size(n)};
  `;
export const gapYPx = css`
  row-gap: 1px;
`;
