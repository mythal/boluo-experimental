import { css } from '@emotion/react';
import { fontSans, text3Xl, textBase, textColor } from '../../styles/typography';
import { dark } from '../../styles/base';
import { gray } from '../../styles/color';

export const title = css(text3Xl, fontSans, dark(textColor(gray['100'])));

export const text = css(textBase, fontSans, dark(textColor(gray['100'])));
