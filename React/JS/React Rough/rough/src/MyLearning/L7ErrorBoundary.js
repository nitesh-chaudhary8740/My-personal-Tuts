import React from 'react';



const ErrorBoundary = ({ children }) => {
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    window.onerror = (error) => {
      setError(error);
    };
  }, []);

  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return children;
};

const MyComponent = () => {
  // Introduce a runtime error
  if (Math.random() > 0.5) {
    throw new Error('Something went wrong in MyComponent!');
  }

  return <div>Hello World!</div>;
};

const L7ErrorBoundary = () => {
  return (
    <div>
      <ErrorBoundary>
        <MyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default L7ErrorBoundary;