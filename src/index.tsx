import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'jotai'
import { BrowserRouter } from 'react-router-dom';
import * as Sentry from "@sentry/react";


if (process.env.SENTRY_DSN) {
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
    environment: process.env.NODE_ENV || 'development',
  });
}


ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
