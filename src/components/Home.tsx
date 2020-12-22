import { Link } from 'react-router-dom';
import { linkStyle } from './atoms/link';

export function Home() {
  return (
    <div>
      <Link to="/swatch" css={linkStyle}>
        Swatch
      </Link>
    </div>
  );
}
