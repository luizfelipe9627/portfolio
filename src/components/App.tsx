import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SwitcherColor from "./SwitcherColor/SwitcherColor";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className="mainContainer">
        <AppRoutes />
        <SwitcherColor />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
