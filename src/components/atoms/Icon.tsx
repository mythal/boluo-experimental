import { lazy, memo, Suspense, Component, LazyExoticComponent, FunctionComponent, SVGProps } from 'react';
import PlaceholderIcon from '../../assets/icons/square-regular.svg';

export type IconComponent = LazyExoticComponent<FunctionComponent<SVGProps<SVGSVGElement>>>;

export const icons = {
  light: lazy(() => import('../../assets/icons/sun-solid.svg')),
  dark: lazy(() => import('../../assets/icons/moon-solid.svg')),
  spinner: lazy(() => import('../../assets/icons/spinner-solid.svg')),
};

export type IconKey = keyof typeof icons;

interface Props {
  icon: IconKey;
  className?: string;
}

export const Icon = memo<Props>(({ icon, className }) => {
  const IconComponent: IconComponent = icons[icon];
  const fallbackIcon = <PlaceholderIcon className={className} width="1em" />;
  return (
    <IconErrorBoundary className={className}>
      <Suspense fallback={fallbackIcon}>
        <IconComponent width="1em" className={className} />
      </Suspense>
    </IconErrorBoundary>
  );
});
Icon.displayName = 'Icon';

class IconErrorBoundary extends Component<{ className?: string }, { error: boolean }> {
  constructor(props: { className?: string }) {
    super(props);
    this.state = { error: false };
  }

  static getDerivedStateFromError() {
    return { error: true };
  }

  render() {
    if (this.state.error) {
      return <PlaceholderIcon className={this.props.className} width="1em" />;
    } else {
      return this.props.children;
    }
  }
}
