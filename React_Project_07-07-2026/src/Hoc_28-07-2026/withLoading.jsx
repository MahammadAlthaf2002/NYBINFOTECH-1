function withLoading(WrappedComponent) {
  return function LoadingComponent(props) {
    if (props.loading) {
      return <h2>Loading...</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withLoading;