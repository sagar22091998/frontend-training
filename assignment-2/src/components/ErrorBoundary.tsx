import { Component, ErrorInfo, ReactNode } from "react";

class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };
  static getDerivedStateFromError(): { hasError: boolean } {
    console.log();
    return { hasError: true };
  }
  componentDidCatch(error: Error, info: ErrorInfo): void {
    console.error("ErrorBoundary caught an error", error, info);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <h2 className="app-error">Error in App. Try later.</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
