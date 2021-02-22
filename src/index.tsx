import { App } from './components/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'jotai'
import { BrowserRouter } from 'react-router-dom';

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
