import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Playground } from './Playground';
import { ErrorTrigger } from './ErrorTrigger';
import React from 'react';
import { PageLoading } from '../PageLoading';
import { Controls } from './Controls';
import { Internationalization } from './Internationalization';
import { Translation, useTranslation } from '../../locals/key';
import { css } from '@emotion/react';
import { p } from '../../styles/spacing';
import { Sidebar } from './Sidebar';
import { TextDisplay } from './TextDisplay';

export interface ScaffoldingItem {
  name: string;
  title: string;
  component: React.ComponentType;
}

const generateItems = (_: Translation): ScaffoldingItem[] => [
  { name: 'error', component: ErrorTrigger, title: _.ERROR_HANDING },
  { name: 'playground', component: Playground, title: _.SANDBOX },
  { name: 'app-loading', component: PageLoading, title: _.PAGE_LOADING },
  { name: 'controls', component: Controls, title: _.CONTROLS },
  { name: 'i18n', component: Internationalization, title: _.I18N },
  { name: 'text', component: TextDisplay, title: _.TEXT_DISPLAY },
];

const itemToRoute = (url: string) => (item: ScaffoldingItem) => {
  const Component = item.component;
  return (
    <Route path={`${url}/${item.name}`} key={item.name}>
      <Component />
    </Route>
  );
};

const styles = {
  container: css`
    min-height: 100vh;
    display: grid;
    grid-template-columns: auto 1fr;
  `,
};

export function Scaffolding() {
  const { url } = useRouteMatch();
  const _ = useTranslation();
  const items = generateItems(_);
  const router = items.map(itemToRoute(url));
  return (
    <div css={styles.container}>
      <Sidebar items={items} />
      <main css={[p.n(4)]}>
        <Switch>{router}</Switch>
      </main>
    </div>
  );
}
