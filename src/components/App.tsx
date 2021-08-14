import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { TopLevelErrorBoundary } from './TopLevelErrorBoundary';
import { PageLoading } from './PageLoading';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import { ErrorTrigger } from './scaffolding/ErrorTrigger';
import { Scaffolding } from './scaffolding/Scaffolding';
import { css, Global } from '@emotion/react';
import { dark } from '../styles/scheme';
import { bgColor } from '../styles/backgrounds';
import { darkTheme, lightTheme } from '../styles/theme';

const appStyle = css`
  body {
    ${bgColor(lightTheme.bgColor)};
    ${dark(bgColor(darkTheme.bgColor))};
    transition-property: background-color;
    transition-duration: 800ms;
  }
`;

export function App() {
  return (
    <BrowserRouter>
      <TopLevelErrorBoundary>
        <Suspense fallback={<PageLoading />}>
          <Global styles={appStyle} />
          <Routes>
            <Route path="/dev/*" element={<Scaffolding/>}/>
            <Route path="/error">
              <ErrorTrigger />
            </Route>
            <Route path="/">
              <Home />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Routes>
        </Suspense>
      </TopLevelErrorBoundary>
    </BrowserRouter>
  );
}
