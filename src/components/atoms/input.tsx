import { css } from '@emotion/react';
import { border2, borderColor, roundedSm } from '../../styles/borders';
import { textBase, textColor } from '../../styles/typography';
import { px, py } from '../../styles/spacing';
import { blue, gray, red } from '../../styles/color';
import { bgColor } from '../../styles/backgrounds';
import { dark } from '../../styles/base';
import { outlineNone } from '../../styles/interactivity';
import { duration300, transition } from '../../styles/transitions';

export const input = css(
  border2,
  roundedSm,
  textBase,
  transition,
  duration300,
  px(2),
  py(1),
  bgColor(gray['100']),
  borderColor('#000000', 6),
  css`
    &[data-error='true'] {
      ${borderColor(red['500'], 40)};
      &:hover,
      &:focus {
        ${borderColor(red['500'])};
      }
    }
    &:focus,
    &:hover {
      ${[outlineNone, borderColor(blue['500'])]};
    }
  `,
  dark(
    bgColor(gray['700']),
    borderColor(gray['600']),
    textColor(gray['100']),
    css`
      &[data-error='true'] {
        ${borderColor(red['500'], 50)}
        &:focus, &:hover {
          ${borderColor(red['600'])}
        }
      }
      &:focus {
        ${[outlineNone, borderColor(gray['500'])]};
      }
    `
  )
);
