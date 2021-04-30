import { css } from '@emotion/react';

const container = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

export function PageLoading() {
  return (
    <div css={container}>
      <span>Loading...</span>
    </div>
  );
}
