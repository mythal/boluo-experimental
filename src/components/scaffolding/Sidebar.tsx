import { SchemeSwitch } from './SchemeSwitch';
import { ScaffoldingItem } from './Scaffolding';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { css } from '@emotion/react';
import { size } from '../../styles/sizing';
import { link } from '../../styles/atom';

const styles = {
  sidebar: css`
    width: clamp(10rem, 20vw, 16rem);
    padding: ${size(4)};
  `,
  list: css`
    margin: 0;
    padding: ${size(2)} 0;
    list-style: none;
  `,
};

const itemToSidebarItem = (url: string) => (item: ScaffoldingItem) => {
  return (
    <li key={item.name}>
      <NavLink css={link} activeClassName="active" to={`${url}/${item.name}`}>
        {item.title}
      </NavLink>
    </li>
  );
};

export function Sidebar({ items }: { items: ScaffoldingItem[] }) {
  const { path } = useRouteMatch();
  const sidebarItemMapper = itemToSidebarItem(path);
  return (
    <aside css={styles.sidebar}>
      <SchemeSwitch />
      <ul css={styles.list}>{items.map(sidebarItemMapper)}</ul>
    </aside>
  );
}
