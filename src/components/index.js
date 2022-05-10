import React from "react";
import Footer from "./footer/Footer";
import Navigation from "./main/Nav";

const Layout = (props) => {
  return (
    <>
      <Navigation />
      {props.children}
      <Footer />
    </>
  );
};

export { Layout, Footer, Navigation };
