import React, { ErrorInfo } from "react";
import { ErrorBoundaryProp } from "../services/interface";


export default class ErrorBoundary extends React.Component<ErrorBoundaryProp> {
  constructor(props: ErrorBoundaryProp) {
    super(props);
    this.state = {hasError: false};
  }
  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error, info);
  }

  render() {
    console.log('ErrorBoundary called');
    // if (this.state.hasError) return <h1>Error was thrown!</h1>;
    return this.props.children;
  }
}