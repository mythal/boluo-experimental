interface Props {
  className?: string;
}

export function AppLoading({ className }: Props) {
  return <div className={className}>Loading...</div>;
}
