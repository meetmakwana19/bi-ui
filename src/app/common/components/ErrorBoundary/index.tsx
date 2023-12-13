import React from 'react';

export class ErrorBoundary extends React.Component {
  state: { hasError: boolean };
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    const metaData = {
      env: process.env.REACT_APP_ENV || 'PROD',
      service: 'MARKETPLACE_UI',
    };
    window?.DD_RUM?.addError(error, { ...metaData });
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    // @ts-ignore
    return this.props.children;
  }
}
