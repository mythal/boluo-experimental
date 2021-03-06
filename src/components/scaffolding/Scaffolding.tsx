import { NavLink, Route, Switch, useRouteMatch } from 'react-router-dom';
import { Playground } from './Playground';
import { ErrorTrigger } from './ErrorTrigger';
import React from 'react';
import { css } from '@emotion/react';
import { size } from '../../styles/base';
import colors from '../../styles/color';

interface ScaffoldingItem {
  name: string;
  title: string;
  component: React.ComponentType;
}

const items: ScaffoldingItem[] = [
  { name: 'error', component: ErrorTrigger, title: '错误处理' },
  { name: 'playground', component: Playground, title: '沙盒' },
];

const itemToRoute = (url: string) => (item: ScaffoldingItem) => {
  const Component = item.component;
  return (
    <Route path={`${url}/${item.name}`} key={item.name}>
      <main>
        <Component />
      </main>
    </Route>
  );
};


const styles = {
  sidebarItem: css`
    display: flex;
    align-items: center;
    padding: 0 ${size(4)};
    height: 2.5rem;
    &:hover {
      background-color: ${colors.cyan['200']};
    }
    &.active {
      font-weight: bold;
    }
  `,
  sidebar: css`
    width: clamp(8rem, 20vw, 12rem);
    flex-shrink: 0;
    background: ${colors.cyan['100']};
    border-right: 1px solid ${colors.cyan['300']};
  `,
  container: css`
    display: grid;
    grid-template-columns: auto 1fr;
    height: 100%;
  `,
  context: css`
    width: 100%;
    height: 100%;
  `,
  empty: css`
    width: 100%;
    height: 100%;
    padding: 30px 10vw;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
}

const itemToSidebarItem = (url: string) => (item: ScaffoldingItem) => {
  return (
    <NavLink css={styles.sidebarItem} activeClassName="active" to={`${url}/${item.name}`} key={item.name}>
      {item.title}
    </NavLink>
  );
}

export function Scaffolding() {
  const { url, path } = useRouteMatch();
  const routerMapper = itemToRoute(url);
  const sidebarItemMapper = itemToSidebarItem(path);
  return (
    <div css={styles.container}>
      <aside css={styles.sidebar}>
        {items.map(sidebarItemMapper)}
      </aside>
      <Switch>
        {items.map(routerMapper)}
        <Route>
          <main css={styles.empty}>
            点侧边栏
          </main>
        </Route>
      </Switch>
    </div>
  )
}
