import React, { Component, ErrorInfo } from 'react';
import * as Sentry from "@sentry/react";

interface Props {
  className?: string;
  fallback: React.ReactNode,
}

interface State {
  error: unknown;
}

export class ErrorBoundary extends Component<Props, State> {
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
      return this.props.fallback;
    } else if (process.env.SENTRY_DSN) {
      return (
        <Sentry.ErrorBoundary fallback={this.props.fallback}>
          {this.props.children}
        </Sentry.ErrorBoundary>
      );
    } else {
      return this.props.children;
    }
  }
}
