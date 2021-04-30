import React from "react";
import Loader from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        flex: 1,
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Loader type="ThreeDots" color="blue" />
    </div>
  );
};

export default Loading;
