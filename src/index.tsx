import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import * as Sentry from "@sentry/react";
import './styles/base.css';
import './styles/style.css';

if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',
  });
}


ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
