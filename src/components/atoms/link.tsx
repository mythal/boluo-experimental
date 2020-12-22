import { css } from '@emotion/react';
import { textColor, underline } from '../../styles/typography';
import { blue } from '../../styles/color';
import { hover } from '../../styles/base';

export const linkStyle = css(textColor(blue['700']), hover(blue['600'], underline));
