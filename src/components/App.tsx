import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { AppError } from './AppError';
import { AppLoading } from './AppLoading';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';

const DesignBoard = lazy(() => import('./DesignBoard'));

export function App() {
  return (
    <AppError>
      <Suspense fallback={<AppLoading />}>
        <Switch>
          <Route path="/design">
            <DesignBoard />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </Suspense>
    </AppError>
  );
}
