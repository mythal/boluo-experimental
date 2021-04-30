import { useTranslation } from '../locals/key';
import { m } from '../styles/spacing';
import { Link } from 'react-router-dom';

export function Home() {
  const _ = useTranslation();
  return (
    <div css={m.n(4)}>
      {_.HOME} <Link to="/dev">DEV</Link>
    </div>
  );
}
