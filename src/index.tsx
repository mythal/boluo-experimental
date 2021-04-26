import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/tailwind.css';
import { env, setDevFavicon } from './utils';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (env() === 'development') {
  setDevFavicon();
}
