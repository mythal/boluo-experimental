import { Link } from 'react-router-dom';
import { linkStyle } from './atoms/link';
import { p } from '../styles/spacing';

export function Home() {
  return (
    <div css={[p(4)]}>
      <Link to="/design" css={linkStyle}>
        Design Board
      </Link>
    </div>
  );
}
