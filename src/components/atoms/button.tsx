import { css } from '@emotion/react';
import { gray, primary, white } from '../../styles/color';
import { border2, roundedSm } from '../../styles/borders';
import { px, py } from '../../styles/spacing';
import { shadow } from '../../styles/effect';
import { dark, focus } from '../../styles/base';
import { outlineNone } from '../../styles/interactivity';

export const button = css(
  roundedSm,
  px(5),
  py(1),
  shadow,
  border2,
  css`
    background-color: var(--btn-bg-color, ${gray['700']});
    border-color: var(--btn-bg-color, ${gray['700']});
    color: var(--btn-text-color, ${gray['100']});
    &:hover {
      background-color: var(--btn-hover-bg-color, ${gray['700']});
      border-color: var(--btn-hover-bg-color, ${gray['700']});
    }
    &:active {
      background-color: var(--btn-active-bg-color, ${gray['600']});
      border-color: var(--btn-active-bg-color, ${gray['600']});
    }
    &:focus {
      border-color: var(--btn-focus-border-color, ${primary['700']});
    }
  `,
  focus(outlineNone),
  dark(css`
    --btn-bg-color: ${gray['300']};
    --btn-hover-bg-color: ${gray['200']};
    --btn-active-bg-color: ${gray['400']};
    --btn-text-color: ${gray['900']};
    --btn-focus-border-color: ${white};
  `)
);

const buttonPrimaryColor = css`
  --btn-bg-color: ${primary['700']};
  --btn-hover-bg-color: ${primary['600']};
  --btn-active-bg-color: ${primary['900']};
  --btn-text-color: ${gray['100']};
  --btn-focus-border-color: ${primary['500']};
`;

export const primaryButton = css(button, buttonPrimaryColor, dark(buttonPrimaryColor));
