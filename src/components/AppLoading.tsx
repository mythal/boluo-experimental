import { css } from '@linaria/core';

const styles = {
  container: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  text: css``,
}

export function AppLoading() {
  return (
    <div className={styles.container}>
      <span className={styles.text}>Loading...</span>
    </div>
  );
}
