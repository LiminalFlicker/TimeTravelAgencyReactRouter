import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import NavBar from "../components/NavBar.jsx";

function MainLayout() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <footer>&copy; I'm such a footer!</footer>
    </>
  );
}

export default MainLayout;
