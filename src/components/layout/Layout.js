import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="mb-5">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
