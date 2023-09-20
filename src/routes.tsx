import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="user" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
