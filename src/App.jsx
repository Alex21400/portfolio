import { BrowserRouter } from "react-router-dom";
import { Hero, Navbar, About, Works, Technologies, Contact } from "./components";
import { StarsCanvas } from "./components/canvas";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      {/* <div className="relative z-0 bg-black-300"> */}
        <Navbar />
        <Hero />
      {/* </div> */}
      <About />
      <Technologies />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
