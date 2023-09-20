import { BrowserRouter } from "react-router-dom";
import AppRoutes from "../routes";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
