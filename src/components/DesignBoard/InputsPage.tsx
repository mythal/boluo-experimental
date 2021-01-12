import { ClassNameProps } from '../common';
import { css } from '@emotion/react';
import { border2, borderColor, roundedSm } from '../../styles/borders';
import { blue, gray } from '../../styles/color';
import { px, py } from '../../styles/spacing';
import { dark, focus } from '../../styles/base';
import { outlineNone } from '../../styles/interactivity';
import { textBase } from '../../styles/typography';

interface Props extends ClassNameProps {}

const style = css(
  border2,
  roundedSm,
  textBase,
  px(1),
  py(1),
  borderColor(gray['300']),
  focus(outlineNone, borderColor(blue['400'])),
  dark(borderColor(gray['200']), focus(outlineNone, borderColor(blue['600'])))
);

export function InputsPage({ className }: Props) {
  return (
    <div className={className}>
      <input css={style} />
    </div>
  );
}
