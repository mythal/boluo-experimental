import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base.css';
import './styles/main.css';
import { env, setDevFavicon } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

if (env() === 'development' ) {
  // Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
  // Learn more: https://snowpack.dev/concepts/hot-module-replacement
  import.meta.hot?.accept();
  setDevFavicon();
}
