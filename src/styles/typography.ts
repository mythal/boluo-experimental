import { css } from '@emotion/react';

export function textColor(color: string) {
  return css`
    color: ${color};
  `;
}

export const textTransparent = css`
  color: transparent;
`;

export const textCurrentColor = css`
  color: currentColor;
`;

export const italic = css`
  font-style: italic;
`;

export const notItalic = css`
  font-style: normal;
`;
