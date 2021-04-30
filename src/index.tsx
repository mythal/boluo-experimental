import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { env, setDevFavicon } from './utils';
import 'modern-normalize/modern-normalize.css';
import './styles/main.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

if (env() === 'development') {
  setDevFavicon();
}
