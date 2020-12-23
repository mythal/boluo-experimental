import { ClassNameProps } from '../common';
import { css } from '@emotion/react';
import { border2, borderColor, roundedSm } from '../../styles/borders';
import { gray } from '../../styles/color';
import { px, py } from '../../styles/spacing';
import { dark } from '../../styles/base';

interface Props extends ClassNameProps {}

const style = css(border2, roundedSm, px(1), py(1), borderColor(gray['300']), dark(borderColor(gray['200'])));

export function InputsPage({ className }: Props) {
  return (
    <div className={className}>
      <input css={style} />
    </div>
  );
}
