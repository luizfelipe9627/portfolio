import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SwitcherColor from "./SwitcherColor/SwitcherColor";
import Main from "./Main/Main";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <AppRoutes />
        <SwitcherColor />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
