import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
const Layout = () => {
  return (
    <div>
      <nav><Header cartItemCount={cartItemCount} /></nav>

      <Outlet />   {/* Page content renders here */}

      <footer><Footer /></footer>
    </div>
  );
};

export default Layout;