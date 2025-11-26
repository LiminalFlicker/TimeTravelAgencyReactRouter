import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
    </Routes>
  );
}

export default App;
