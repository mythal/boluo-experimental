import React, { Component, ErrorInfo } from 'react';

export function Oops() {
  return (
    <div>
      <h1>糟糕</h1>
      <p>有什么搞砸了！</p>
    </div>
  );
}

interface Props {
  className?: string;
}

interface State {
  error: unknown;
}

export class TopLevelErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined };
  }
  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.error(errorInfo);
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return <Oops />;
    } else {
      return this.props.children;
    }
  }
}
