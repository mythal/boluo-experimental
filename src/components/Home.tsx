import { Link } from 'react-router-dom';
import { linkStyle } from './atoms/link';

export function Home() {
  return (
    <div>
      <Link to="/design" css={linkStyle}>
        Design Board
      </Link>
    </div>
  );
}