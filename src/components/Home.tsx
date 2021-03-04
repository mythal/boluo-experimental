import { Link } from 'react-router-dom';

export function Home() {
  return (
    <div>
      <div>
        <Link to="/design">
          Design
        </Link>
      </div>
      <div>
        <Link to="/error">
          Error
        </Link>
      </div>
    </div>
  );
}
