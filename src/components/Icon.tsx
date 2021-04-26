import iconsPath from '../assets/icons.svg';
import { css } from '@emotion/react';

export type IconName = 'moon' | 'sun';

interface Props {
  name: IconName;
}

const iconStyle = css`
  display: inline;
`;

export function Icon({ name }: Props) {
  return (
    <svg css={iconStyle} width="1em" height="1em">
      <use xlinkHref={`${iconsPath}#${name}`} />
    </svg>
  );
}
