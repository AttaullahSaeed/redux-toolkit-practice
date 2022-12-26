import React from "react";
import { HashLoader } from "react-spinners";

const Loader = () => {
  return (
    <div style={{ height: "45vh" }}>
      <div
        className="d-flex justify-content-center align-content-center "
        style={{ marginTop: "259px" }}
      >
        <HashLoader color="#36d7b7" />
      </div>
    </div>
  );
};

export default Loader;
