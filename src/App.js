import Toolbar from './Component/Navigation/Toolbar/Toolbar'
import Home from './Component/Layouts/Home/home';
import About from './Component/Layouts/About/about'
import Service from './Component/Layouts/Service/service'
import Portfolio from './Component/Layouts/Portfolio/Portfolio'
import ContactMe from './Component/Layouts/Contact/Contactme'
import Footer from './Component/Layouts/Footer/footer'
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Toolbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="*" element={<Footer />} />
      </Routes>
      <Footer />
      
    </>
  );
}

export default App;
