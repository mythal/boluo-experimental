import { css } from '@emotion/react';

// Box Shadow https://tailwindcss.com/docs/box-shadow
export const shadowSm = css`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
`;
export const shadow = css`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
export const shadowMd = css`
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
`;
export const shadowLg = css`
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
`;
export const shadowXl = css`
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
`;
export const shadow2Xl = css`
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
`;
export const shadowInner = css`
  box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);
`;
export const shadowNone = css`
  box-shadow: 0 0 #0000;
`;
// Opacity https://tailwindcss.com/docs/opacity
export const opacity = (n: number) => css`
  opacity: ${n / 100};
`;
