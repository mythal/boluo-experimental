import { css } from '@emotion/react';
import { border2, borderColor, roundedSm } from '../../styles/borders';
import { textBase, textColor } from '../../styles/typography';
import { px, py } from '../../styles/spacing';
import { blue, gray } from '../../styles/color';
import { bgColor } from '../../styles/backgrounds';
import { dark, focus } from '../../styles/base';
import { outlineNone } from '../../styles/interactivity';

export const input = css(
  border2,
  roundedSm,
  textBase,
  px(2),
  py(1),
  borderColor(gray['300']),
  bgColor(gray['100']),
  focus(outlineNone, borderColor(blue['700'])),
  dark(
    bgColor(gray['700']),
    borderColor(gray['600']),
    focus(outlineNone, borderColor(gray['500'])),
    textColor(gray['100'])
  )
);
