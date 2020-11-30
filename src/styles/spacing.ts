import { css } from '@emotion/react';
import { math } from 'polished';

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

// Margin https://tailwindcss.com/docs/margin

export function mx(n: number) {
  return css`
    margin-left: ${size(n)};
    margin-right: ${size(n)};
  `;
}

export const mxAuto = css`
  margin-left: auto;
  margin-right: auto;
`;

export function my(n: number) {
  return css`
    margin-top: ${size(n)};
    margin-bottom: ${size(n)};
  `;
}

export const myAuto = css`
  margin-top: auto;
  margin-bottom: auto;
`;

export function m(n: number) {
  return css`
    margin: ${size(n)};
  `;
}

export const mAuto = css`
  margin: auto;
`;

export function mt(n: number) {
  return css`
    margin-top: ${size(n)};
  `;
}

export const mtAuto = css`
  margin-top: auto;
`;

export function mr(n: number) {
  return css`
    margin-right: ${size(n)};
  `;
}

export const mrAuto = css`
  margin-right: auto;
`;

export function mb(n: number) {
  return css`
    margin-bottom: ${size(n)};
  `;
}

export const mbAuto = css`
  margin-bottom: auto;
`;

export function ml(n: number) {
  return css`
    margin-left: ${size(n)};
  `;
}

export const mlAuto = css`
  margin-left: auto;
`;

// Padding https://tailwindcss.com/docs/padding

export function px(n: number) {
  return css`
    padding-left: ${size(n)};
    padding-right: ${size(n)};
  `;
}

export const pxPx = css`
  padding-left: 1px;
  padding-right: 1px;
`;

export function py(n: number) {
  return css`
    padding-top: ${size(n)};
    padding-bottom: ${size(n)};
  `;
}

export const pyPx = css`
  padding-top: 1px;
  padding-bottom: 1px;
`;

export function p(n: number) {
  return css`
    padding: ${size(n)};
  `;
}

export const pPx = css`
  padding: 1px;
`;

export function pt(n: number) {
  return css`
    padding-top: ${size(n)};
  `;
}

export const ptPx = css`
  padding-top: 1px;
`;

export function pr(n: number) {
  return css`
    padding-right: ${size(n)};
  `;
}

export const prPx = css`
  padding-right: 1px;
`;

export function pb(n: number) {
  return css`
    padding-bottom: ${size(n)};
  `;
}

export const pbPx = css`
  padding-bottom: 1px;
`;

export function pl(n: number) {
  return css`
    padding-left: ${size(n)};
  `;
}

export const plPx = css`
  padding-left: 1px;
`;
