import { memo } from 'react';
import placeholder from '../../assets/icons/square-regular.svg';
import dark from '../../assets/icons/moon-solid.svg';
import light from '../../assets/icons/sun-solid.svg';
import spinner from '../../assets/icons/spinner-solid.svg';

export type IconKey = keyof typeof icons;

interface Props {
  icon: IconKey;
  className?: string;
}

const icons = {
  placeholder,
  dark,
  light,
  spinner,
};

export const Icon = memo<Props>(({ icon, className }) => {
  const sprite = icons[icon];
  return (
    <svg className={className} viewBox={sprite.viewBox} width="1em" height="1em">
      <use xlinkHref={sprite.url}/>
    </svg>
  );
});
Icon.displayName = 'Icon';
