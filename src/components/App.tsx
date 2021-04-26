import React, { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { TopLevelErrorBoundary } from './TopLevelErrorBoundary';
import { AppLoading } from './AppLoading';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import { ErrorTrigger } from './scaffolding/ErrorTrigger';
import { Scaffolding } from './scaffolding/Scaffolding';

export function App() {
  return (
    <BrowserRouter>
      <TopLevelErrorBoundary>
        <Suspense fallback={<AppLoading />}>
          <Switch>
            <Route path="/dev">
              <Scaffolding />
            </Route>
            <Route path="/error">
              <ErrorTrigger />
            </Route>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route>
              <PageNotFound />
            </Route>
          </Switch>
        </Suspense>
      </TopLevelErrorBoundary>
    </BrowserRouter>
  );
}
