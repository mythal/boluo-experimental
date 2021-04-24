import iconsPath from '../assets/icons.svg';
import { css } from '@emotion/react';


interface Props {
  id: 'moon' | 'sun';
}

const iconStyle = css`
  display: inline;
`;

export function Icon({ id }: Props) {
  return (
    <svg css={iconStyle} width="1em" height="1em">
      <use xlinkHref={`${iconsPath}#${id}`}/>
    </svg>
  );
}
