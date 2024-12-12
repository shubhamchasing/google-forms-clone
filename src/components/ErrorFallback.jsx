import React from "react";

const ErrorFallback = ({ error }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "1em",
      }}
    >
      <h1>Something went wrong!</h1>
      <p>{error.message && error.message}</p>
      <a href="/">Go back to Home</a>
    </div>
  );
};

export default ErrorFallback;
