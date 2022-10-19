import React from "react";
import Navbar from "../components/Navbar";
import Outlet from "react";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
