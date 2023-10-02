import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.js";
import { Aboutus } from "./pages/Aboutus.js";
import { Contactus } from "./pages/Contactus.js";
import { Auth } from "./pages/Auth.js";
import { Signup } from "./pages/Signup.js";
import { Navbar } from "./components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/contact-us" element={<Contactus />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
