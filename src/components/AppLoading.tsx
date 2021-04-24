import { css } from '@emotion/react';

import React from 'react';
const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  text: css``,
};

export function AppLoading() {
  return (
    <div css={styles.container}>
      <span css={styles.text}>Loading...</span>
    </div>
  );
}
