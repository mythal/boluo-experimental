import { ClassNameProps } from '../common';
import { css } from '@emotion/react';
import { border2, borderColor, rounded } from '../../styles/borders';
import { bgColor } from '../../styles/backgrounds';
import { gray, primary } from '../../styles/color';
import { active, dark, focus, hover } from '../../styles/base';
import { appearanceNone } from '../../styles/interactivity';
import { h, w } from '../../styles/sizing';

interface Props extends ClassNameProps {
  value: boolean;
  onChange: (value: boolean) => void;
}

const style = css(
  rounded,
  bgColor(gray['400']),
  appearanceNone,
  w(10),
  h(4),
  hover(bgColor(gray['500'])),
  active(bgColor(gray['400']))
);

export function Switch({ className, value, onChange }: Props) {
  return (
    <input
      css={style}
      type="range"
      className={className}
      max={1}
      value={value ? 1 : 0}
      onChange={(e) => onChange(e.target.value === '1')}
    />
  );
}
