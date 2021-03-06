import { css } from '@emotion/react';
import React, { useRef, useState } from 'react';
import colors from '../../styles/color';
import { rounded } from '../../styles/borders';
import { size } from '../../styles/base';
import { selectNone } from '../../styles/interactivity';


const container = css`
  padding: 4rem clamp(2rem, 10vw, 6rem);
`;

const text = css`
  font-family: 'Palatino', serif;
  margin: ${size(2)} 0;
`;

const button = css`
  background-color: ${colors.gray['200']};
  height: 2rem;
  padding: 0 0.5rem;
  ${rounded};

  &:hover {
    background-color: ${colors.gray['300']};
  }
`;


class Trouble extends React.Component<unknown, { triggered: boolean }> {
  constructor(props: unknown) {
    super(props);
    this.state = { triggered: false };
  }
  trigger() {
    this.setState({ triggered: true });
  }
  render() {
    if (this.state.triggered) {
      throw new Error('Everything in fire');
    }
    return (
      <p css={text}>Nothing happen.</p>
    )
  }
}


class LocalErrorBoundary extends React.Component<unknown, { error: unknown }> {
  constructor(props: unknown) {
    super(props);
    this.state = { error: null };
  }
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(errorInfo);
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <p css={text}>有什么炸了</p>

          <button css={button} onClick={() => this.setState({ error: null })}>重来</button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}

export function ErrorTrigger() {
  const [localErrorBoundary, setLocalErrorBoundary] = useState(true);
  const troubleRef = useRef<Trouble>(null);
  const Wrapper = localErrorBoundary ? LocalErrorBoundary : React.Fragment;
  return (
    <div css={container}>
      <p css={text}><label css={selectNone}>局部错误边界 <input type="checkbox" checked={localErrorBoundary} onChange={e => setLocalErrorBoundary(e.target.checked)}/></label></p>
      <button css={button} onClick={() => troubleRef.current?.trigger()}>Everything in fire</button>
      <Wrapper>
        <Trouble ref={troubleRef}/>
      </Wrapper>
    </div>
  );
}
