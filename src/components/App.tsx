import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { TopLevelErrorBoundary } from './TopLevelErrorBoundary';
import { AppLoading } from './AppLoading';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import { ErrorTrigger } from './scaffolding/ErrorTrigger';
import { Design } from './scaffolding/Design';

export function App() {
  return (
    <TopLevelErrorBoundary fallback={<p>An error has occurred</p>}>
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
    </TopLevelErrorBoundary>
  );
}
