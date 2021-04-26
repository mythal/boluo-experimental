import { NavLink, Route, useRouteMatch } from 'react-router-dom';
import { Playground } from './Playground';
import { ErrorTrigger } from './ErrorTrigger';
import React from 'react';
import { AppLoading } from '../AppLoading';
import { Controls } from './Controls';
import { Internationalization } from './Internationalization';
import { SchemeSwitch } from './SchemeSwitch';
import { TranslationFunction, useTranslation } from '../../locals/key';

interface ScaffoldingItem {
  name: string;
  title: string;
  component: React.ComponentType;
}

const generateItems = (_: TranslationFunction): ScaffoldingItem[] => [
  { name: 'error', component: ErrorTrigger, title: _('Error Handling') },
  { name: 'playground', component: Playground, title: _('Sandbox') },
  { name: 'app-loading', component: AppLoading, title: _('Page Loading') },
  { name: 'controls', component: Controls, title: _('Controls') },
  { name: 'i18n', component: Internationalization, title: _('Internationalization') },
];

const itemToRoute = (url: string) => (item: ScaffoldingItem) => {
  const Component = item.component;
  return (
    <Route path={`${url}/${item.name}`} key={item.name}>
      <Component />
    </Route>
  );
};

const itemToSidebarItem = (url: string) => (item: ScaffoldingItem) => {
  return (
    <li key={item.name}>
      <NavLink css={[]} activeClassName="active" to={`${url}/${item.name}`}>
        {item.title}
      </NavLink>
    </li>
  );
};

export function Scaffolding() {
  const { url, path } = useRouteMatch();
  const routerMapper = itemToRoute(url);
  const _ = useTranslation();
  const sidebarItemMapper = itemToSidebarItem(path);
  const items = generateItems(_);
  return (
    <div css={[]}>
      <aside css={[]}>
        <SchemeSwitch />
        <ul>{items.map(sidebarItemMapper)}</ul>
      </aside>
      <main css={[]}>{/*<Switch>{items.map(routerMapper)}</Switch>*/}</main>
    </div>
  );
}
