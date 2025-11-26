import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar.jsx";
import travelData from "../data/travel.json";

function MainLayout() {
  console.log("Dest data:", travelData[0]);

  return (
    <>
      <header>
        <NavBar />
      </header>
      <Outlet context={travelData} />
      <footer>&copy;♥️꩜</footer>
    </>
  );
}

export default MainLayout;
