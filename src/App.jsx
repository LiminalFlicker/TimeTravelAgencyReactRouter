import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./components/Home.jsx";
import Destinations from "./pages/Destinations.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import ViewDestination from "./pages/ViewDestination.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/destination/:slug" element={<ViewDestination />} />
      </Route>
    </Routes>
  );
}

export default App;
