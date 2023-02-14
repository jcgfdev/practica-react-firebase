import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function LayoutRoot() {
  return (
    <>
      <Navbar />
      <Outlet />
      <p>Footer</p>
    </>
  );
}
export default LayoutRoot;