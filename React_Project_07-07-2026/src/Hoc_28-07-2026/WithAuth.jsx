function withAuth(WrappedComponent) {
  return function AuthComponent(props) {
    const isLoggedIn = true;

    if (!isLoggedIn) {
      return <h2>Please Login to Continue</h2>;
    }

    return <WrappedComponent {...props} />;
  };
}

export default withAuth;