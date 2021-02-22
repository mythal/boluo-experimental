import { Component, ErrorInfo } from 'react';
import { css } from '@linaria/core';

interface Props {
  className?: string;
}

interface State {
  retry: number;
  error: unknown;
}

const title = css`
  text-transform: uppercase;
`;

export class Oops extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: undefined, retry: 0 };
  }
  componentDidCatch(error: unknown, errorInfo: ErrorInfo) {
    console.error(errorInfo);
  }

  static getDerivedStateFromError(error: unknown) {
    return { error };
  }

  refresh() {
    document.location.reload();
  }

  render() {
    if (this.state.error) {
      return (
        <div className={title}>
          <h1>Oops</h1>
          <button onClick={() => this.setState({ error: undefined, retry: this.state.retry + 1 })}>Retry</button>
          <button onClick={this.refresh}>Refresh</button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
