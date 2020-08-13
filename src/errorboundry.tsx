import React from 'react'

type MyState={
    hasError:boolean,
}
class ErrorBoundary extends React.Component<{},MyState> {
  constructor(props:any) {
    super(props);
    this.state = {hasError: false};
  }

  static getDerivedStateFromError(error:Error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error:Error, info:object) {
    this.setState({hasError: true});
  }

  render() {
    if(this.state.hasError) return <div>Error! better to replace this by a Component</div>;
    
    return this.props.children;

  }
}
export default ErrorBoundary;