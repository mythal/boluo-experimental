import { css } from '@emotion/react';
import { colors } from './color';
import { size } from './base';
import { darken } from 'color2k';

const primaryButtonColor = colors.emerald['700'];

export const button = css`
  --btn-bg-color: ${colors.gray['100']};
  --shadow-color: rgba(0, 0, 0, 0.1);
  --shadow: var(--shadow-color) 0 1px 0 0;
  --line-color: ${colors.gray['300']};
  --focus-shadow: var(--line-color) 0 0 0 1px inset;

  color: #000;
  vertical-align: middle;
  box-shadow: var(--shadow), var(--focus-shadow);
  transform: translateY(-1px);
  border-radius: ${size(0.5)};
  padding: ${size(1.25)} ${size(3)};
  background-color: var(--btn-bg-color);
  cursor: pointer;
  user-select: none;
  transition-property: transform;
  transition-duration: 100ms;
  transition-timing-function: ease-out;

  &:not(:disabled):hover {
    --shadow-color: rgba(0, 0, 0, 0.2);
    --line-color: ${colors.gray['400']};
  }

  &:focus {
    outline: none;
    --line-color: ${colors.blueGray['500']};
  }

  &:not(:disabled):active, &.active, &[data-active="true"] {
    --shadow: var(--shadow-color) 0 3px 0 0 inset;
    filter: brightness(94%);
  }

  &:disabled {
    --btn-bg-color: ${colors.gray['200']};
    color: ${colors.gray['600']};
    cursor: default;
  }

  &[data-kind="primary"] {
    color: #FFF;
    --btn-bg-color: ${primaryButtonColor};
    --line-color: ${colors.emerald['700']};
    &:not(:disabled):hover {
      --btn-bg-color: ${colors.emerald['600']};
      --line-color: ${colors.emerald['700']};
    }
    &:disabled {
      --btn-bg-color: ${darken(primaryButtonColor, 0.07)};
      --line-color: ${darken(primaryButtonColor, 0.07)};
      color: ${colors.gray['300']};
    }
    &:focus {
      --line-color: #000;
    }
  }
  &[data-icon="true"] {
    padding: ${size(1.25)} ${size(1.25)};
  }
`;

export const controlStyle = { button }
