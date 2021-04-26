import { useTranslation } from '../states/i18n';

export function Home() {
  const _ = useTranslation();
  return <div className="m-4">{_('Home')}</div>;
}
