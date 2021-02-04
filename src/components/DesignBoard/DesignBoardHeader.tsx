import { rightPx, schemeState } from './common';

import { ClassNameProps } from '../common';
import { bgColor } from '../../styles/backgrounds';
import { black, blue, white } from '../../styles/color';
import { textColor, textLg } from '../../styles/typography';
import { flex } from '../../styles/layout';
import { itemsCenter, justifyBetween } from '../../styles/box-alignment';
import { shadowMd } from '../../styles/effect';
import { p, py, spaceX } from '../../styles/spacing';
import { Icon } from '../atoms/icon';
import { css } from '@emotion/react';
import { active, focus, hover } from '../../styles/base';
import { rounded } from '../../styles/borders';
import { outlineNone } from '../../styles/interactivity';
import { useRecoilState } from 'recoil';

export interface Props extends ClassNameProps {}

const style = {
  header: css(bgColor(black), textColor(white), rightPx, py(3), flex, itemsCenter, shadowMd, justifyBetween),
  switch: css(
    p(1.5),
    rounded,
    hover(bgColor(blue['800'])),
    focus(outlineNone),
    active(bgColor(blue['500'])),
    css`
      &[data-on='true'] {
        ${bgColor(blue['700'])}
      }
    `
  ),
};

export function DesignBoardHeader({ className }: Props) {
  const [scheme, setScheme] = useRecoilState(schemeState);
  return (
    <header css={style.header} className={className}>
      <h1 css={[textLg]}>组件设计</h1>
      <div css={spaceX(1)}>
        <button data-on={scheme === 'light'} onClick={() => setScheme('light')} css={style.switch}>
          <Icon icon="light" />
        </button>
        <button data-on={scheme === 'dark'} onClick={() => setScheme('dark')} css={style.switch}>
          <Icon icon="dark" />
        </button>
      </div>
    </header>
  );
}
