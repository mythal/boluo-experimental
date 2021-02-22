import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Oops } from './Oops';
import { AppLoading } from './AppLoading';
import { Home } from './Home';
import { PageNotFound } from './PageNotFound';
import { ErrorTrigger } from './scaffolding/ErrorTrigger';
import { Design } from './scaffolding/Design';

export function App() {
  return (
    <Oops>
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
    </Oops>
  );
}
