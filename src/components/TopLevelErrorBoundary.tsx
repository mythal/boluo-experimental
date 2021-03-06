import React, { Component, ErrorInfo } from 'react';
import {ErrorBoundary as SentryErrorBoundary} from "@sentry/react";

export function Oops() {
  return (
    <div>
      <h1>糟糕</h1>
      <p>有什么搞砸了！</p>
    </div>
  )
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
    if (process.env.SENTRY_DSN) {
      return (
        <SentryErrorBoundary fallback={<Oops/>}>
          {this.props.children}
        </SentryErrorBoundary>
      );
    } else if (this.state.error) {
      return <Oops/>;
    } else {
      return this.props.children;
    }
  }
}