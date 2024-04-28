import Header from "./Header/Header";
import SwitcherColor from "./SwitcherColor/SwitcherColor";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../router";
import { ModalContextProvider } from "../context/ModalContext";
import Modal from "./Modal/Modal";

function App() {
  return (
    <BrowserRouter>
      <ModalContextProvider>
        <Modal />
        <Header />
        <main>
          <AppRoutes />
          <SwitcherColor />
        </main>
      </ModalContextProvider>
    </BrowserRouter>
  );
}

export default App;
