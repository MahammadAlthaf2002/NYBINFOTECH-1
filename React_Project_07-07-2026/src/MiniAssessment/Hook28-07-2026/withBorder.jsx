function withBorder(WrappedComponent) {
  return function EnhancedComponent(props) {
    return (
      <div
        style={{
          border: "2px solid blue",
          padding: "20px",
          width: "300px",
          margin: "20px auto",
          textAlign: "center",
        }}
      >
        <WrappedComponent {...props} />
      </div>
    );
  };
}

export default withBorder;