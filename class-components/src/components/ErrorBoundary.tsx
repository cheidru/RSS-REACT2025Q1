import React, { ErrorInfo } from 'react';
import { ErrorProps, ErrorState } from '../services/interface';
export default class ErrorBoundary extends React.Component<
  ErrorProps,
  ErrorState
> {
  constructor(props: ErrorProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-container">
          <div className="error-wrapper">
            <h1>Error was thrown!</h1>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
