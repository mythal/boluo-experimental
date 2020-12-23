import { ClassNameProps } from '../common';
import { css } from '@emotion/react';
import { bgColor } from '../../styles/backgrounds';
import { gray } from '../../styles/color';
import { textColor } from '../../styles/typography';
import { rounded } from '../../styles/borders';
import { px, py } from '../../styles/spacing';
import { shadowLg } from '../../styles/effect';
import { dark, focus, hover } from '../../styles/base';
import { outlineNone } from '../../styles/interactivity';

interface Props extends ClassNameProps {}

const buttonStyle = css(
  bgColor(gray['900']),
  textColor(gray['100']),
  rounded,
  px(4),
  py(2),
  shadowLg,
  hover(bgColor(gray['800'])),
  focus(outlineNone),
  dark(bgColor(gray['300']), hover(bgColor(gray['400'])), textColor(gray['900']))
);

export function ButtonsPage({ className }: Props) {
  return (
    <div className={className}>
      <button css={buttonStyle}>按钮</button>
    </div>
  );
}
