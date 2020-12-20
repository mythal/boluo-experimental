import { css } from '@emotion/react';
import { opacify } from 'polished';
import { memoize } from './base';

// Background Attachment https://tailwindcss.com/docs/background-attachment
export const bgFixed = css`
  background-attachment: fixed;
`;
export const bgLocal = css`
  background-attachment: local;
`;
export const bgScroll = css`
  background-attachment: scroll;
`;

// Background Clip https://tailwindcss.com/docs/background-clip
export const bgClipBorder = css`
  background-clip: border-box;
`;
export const bgClipPadding = css`
  background-clip: padding-box;
`;
export const bgClipContent = css`
  background-clip: content-box;
`;
// noinspection CssInvalidPropertyValue
export const bgClipText = css`
  background-clip: text;
`;

// Background Color https://tailwindcss.com/docs/background-color
export const bgTransparent = css`
  background-color: transparent;
`;
export const bgCurrent = css`
  background-color: currentColor;
`;
export const bg = memoize((color: string, opacity = 100) => {
  const finalColor = opacity >= 100 ? color : opacify(opacity / 100, color);
  return css`
    background-color: ${finalColor};
  `;
});

// Background Repeat https://tailwindcss.com/docs/background-repeat
export const bgRepeat = css`
  background-repeat: repeat;
`;
export const bgNoRepeat = css`
  background-repeat: no-repeat;
`;
export const bgRepeatX = css`
  background-repeat: repeat-x;
`;
export const bgRepeatY = css`
  background-repeat: repeat-y;
`;
export const bgRepeatRound = css`
  background-repeat: round;
`;
export const bgRepeatSpace = css`
  background-repeat: space;
`;

// Background Size https://tailwindcss.com/docs/background-size
export const bgAuto = css`
  background-size: auto;
`;
export const bgCover = css`
  background-size: cover;
`;
export const bgContain = css`
  background-size: contain;
`;
