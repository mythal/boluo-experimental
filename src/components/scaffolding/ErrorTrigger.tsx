import React, { useRef, useState } from 'react';
import { paragraph, span } from '../../styles/atom';

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
    return <p css={paragraph}>Nothing happen.</p>;
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
          <p>有什么炸了</p>
          <button onClick={() => this.setState({ error: null })}>重来</button>
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
    <div>
      <p>
        <label>
          <span css={span}>局部错误边界 </span>
          <input
            type="checkbox"
            checked={localErrorBoundary}
            onChange={(e) => setLocalErrorBoundary(e.target.checked)}
          />
        </label>
      </p>
      <button onClick={() => troubleRef.current?.trigger()}>Everything in fire</button>
      <Wrapper>
        <Trouble ref={troubleRef} />
      </Wrapper>
    </div>
  );
}
