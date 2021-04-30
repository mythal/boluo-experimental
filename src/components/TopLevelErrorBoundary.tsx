import React, { Component, ErrorInfo } from 'react';
import { overflow } from '../styles/layout';
import { p } from '../styles/spacing';
import { bgColor } from '../styles/backgrounds';
import { black, green } from '../styles/color';
import { fontMono, text, textColor, whitespace } from '../styles/typography';
import { rounded } from '../styles/borders';

const styles = {
  errorMessage: [
    overflow.x.auto,
    p.n(4),
    rounded.normal,
    bgColor(black),
    textColor(green['400']),
    text.sm,
    fontMono,
    whitespace.pre,
  ],
};

export function Oops({ error }: { error: string }) {
  return (
    <div css={p.n(8)}>
      <h1>糟糕</h1>
      <p>有什么搞砸了！</p>
      <pre css={styles.errorMessage}>{error}</pre>
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
      return <Oops error={String(this.state.error)} />;
    } else {
      return this.props.children;
    }
  }
}
