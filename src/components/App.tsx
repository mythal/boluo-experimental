import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { ErrorBoundary } from './ErrorBoundary';
import { AppLoading } from './AppLoading';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import { ErrorTrigger } from './scaffolding/ErrorTrigger';
import { Design } from './scaffolding/Design';

export function App() {
  return (
    <ErrorBoundary fallback={"An error has occurred"}>
      <Suspense fallback={<AppLoading />}>
        <Switch>
          <Route path="/design">
            <Design/>
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
    </ErrorBoundary>
  );
}
