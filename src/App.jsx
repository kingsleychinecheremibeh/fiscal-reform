import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Header from "./components/Header";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Terms from "./pages/Terms.jsx"
import Guide from "./pages/Guide.jsx"
import Commitee from "./pages/Commitee.jsx"
import Contact from "./pages/Contact.jsx"
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/guide" element={<Guide />} />
        <Route path="/commitee" element={<Commitee />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
};
export default App;