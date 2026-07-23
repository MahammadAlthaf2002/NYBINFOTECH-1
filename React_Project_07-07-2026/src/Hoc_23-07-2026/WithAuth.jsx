import React from "react";

const WithAuth = (WrappedComponent) => {
  return function AuthComponent(props) {
    const isLoggedIn = true; 

    if (!isLoggedIn) {
      return <h2>Please Login First</h2>;
    }

    return <WrappedComponent {...props} />;
  };
};


export default WithAuth;