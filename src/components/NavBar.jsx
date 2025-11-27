import "./NavBar.css";
import { NavLink } from "react-router";

function NavBar() {
  return (
    <>
      <div className="navbar bg-green-500 shadow-md">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Time Travel Agency</a>
        </div>

        <nav className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="destinations">Destinations</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
