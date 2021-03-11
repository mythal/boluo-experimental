import { Suspense, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TopLevelErrorBoundary } from './TopLevelErrorBoundary';
import { AppLoading } from './AppLoading';
import { BrowserRouter } from 'react-router-dom';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import { ErrorTrigger } from './scaffolding/ErrorTrigger';
import { Scaffolding } from './scaffolding/Scaffolding';
import { setHeight, setSchemeClass } from '../styles/base';

export function App() {
  useEffect(() => {
    setSchemeClass();
    setHeight()
  }, []);
  return (
    <BrowserRouter>
      <TopLevelErrorBoundary>
        <Suspense fallback={<AppLoading />}>
          <Switch>
            <Route path="/dev">
              <Scaffolding/>
            </Route>
            <Route path='/error'>
              <ErrorTrigger/>
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
