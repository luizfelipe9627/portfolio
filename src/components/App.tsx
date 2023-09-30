import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SwitcherColor from "./SwitcherColor/SwitcherColor";
import About from "./About/About";
import Home from "./Home/Home";
import Services from "./Services/Services";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <main className="mainContainer">
        <Home />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <SwitcherColor />
      </main>
      <Footer />
    </>
  );
}

export default App;
