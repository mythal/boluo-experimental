import { useTranslation } from '../states/i18n';

export function Home() {
  const _ = useTranslation();
  return (
    <div>
      {_('Home')}
    </div>
  );
}
