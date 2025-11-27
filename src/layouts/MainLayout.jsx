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
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4 mt-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by Time
            Industries Ltd
          </p>
        </aside>
      </footer>
    </>
  );
}

export default MainLayout;
