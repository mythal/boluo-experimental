import { NavLink, useRouteMatch } from 'react-router-dom';
import { wFull } from '../../styles/sizing';
import { px, py } from '../../styles/spacing';
import { block } from '../../styles/layout';
import { textColor, textRight, textSm } from '../../styles/typography';
import { hover } from '../../styles/base';
import { css } from '@emotion/react';
import { bgColor } from '../../styles/backgrounds';
import { black, blue, gray } from '../../styles/color';
import { duration300, transition } from '../../styles/transitions';
import { borderColor, borderL0, borderL4 } from '../../styles/borders';

interface Props {
  className?: string;
  title: string;
  name: string;
}

const style = css(
  wFull,
  block,
  bgColor(gray['200']),
  textColor(gray['800']),
  textRight,
  borderL0,
  borderColor(blue['500']),
  px(4),
  py(3),
  textSm,
  hover(bgColor(gray['300']), textColor(black), transition, borderL4, duration300),
  css`
    &.active {
      ${borderL4}
    }
  `
);

export const DesignBoardSidebarItem = ({ className, title, name }: Props) => {
  const { url } = useRouteMatch();
  return (
    <li className={className}>
      <NavLink activeClassName="active" css={style} to={`${url}/${name}`}>
        {title}
      </NavLink>
    </li>
  );
};
