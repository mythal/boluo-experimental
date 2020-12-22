import { Component, ErrorInfo } from 'react';

interface Props {
  className?: string;
}

interface State {
  error: unknown;
}

export class AppError extends Component<Props, State> {
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

  retry() {
    this.setState({ error: undefined });
  }

  refresh() {
    document.location.reload();
  }

  render() {
    if (this.state.error) {
      return (
        <div className={this.props.className}>
          <h1>Oops</h1>
          <button onClick={this.retry}>retry</button>
          <button onClick={this.refresh}>refresh</button>
        </div>
      );
    } else {
      return this.props.children;
    }
  }
}
