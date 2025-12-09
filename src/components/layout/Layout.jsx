import React from "react";
import Navbar from "../common/Navbar";
import Popup from "../common/Popup";
import Footer from "../common/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <Popup /> */}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
