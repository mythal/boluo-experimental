import { Suspense } from 'react';
import { DEBUG } from '../settings';
import { Route, Switch } from 'react-router-dom';
import { Swatch } from './swatch/Swatch';
import { AppError } from './AppError';
import { AppLoading } from './AppLoading';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';

export function App() {
  return (
    <AppError>
      <Suspense fallback={<AppLoading />}>
        <Switch>
          {DEBUG && (
            <Route path="/swatch">
              <Swatch />
            </Route>
          )}
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
