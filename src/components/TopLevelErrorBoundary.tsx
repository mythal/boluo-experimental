import React, { Component, ErrorInfo } from 'react';
import {ErrorBoundary as SentryErrorBoundary} from "@sentry/react";

interface Props {
  className?: string;
  fallback: React.ReactNode,
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
        <SentryErrorBoundary fallback={this.props.fallback}>
          {this.props.children}
        </SentryErrorBoundary>
      );
    } else if (this.state.error) {
      return this.props.fallback;
    } else {
      return this.props.children;
    }
  }
}
