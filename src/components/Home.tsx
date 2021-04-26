import { useTranslation } from '../locals/key';

export function Home() {
  const _ = useTranslation();
  return <div>{_('Home')}</div>;
}
