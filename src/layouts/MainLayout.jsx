import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar.jsx";
import destData from "../data/travel.json";

function MainLayout() {
  console.log("Dest data:", destData[0]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet />
      <footer>&copy;♥️꩜</footer>
    </>
  );
}

export default MainLayout;
