import { Link } from "react-router-dom";
import { Menu , X } from "lucide-react";
import { useRef } from "react";


export const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("clicked");
  }

  return (
    <div className="navbar">
      <h3>Logo</h3>
      <nav ref={navRef}>
        <Link className="link" onClick={showNavbar} to="/"> Home </Link>
        <Link className="link" onClick={showNavbar} to="/about-us"> About Us</Link>
        <Link className="link" onClick={showNavbar} to="/contact-us"> Contact Us</Link>
        <Link className="link" onClick={showNavbar} to="/auth">Login/Register</Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <X size={30} />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <Menu size={30} />
      </button>
    </div>
  );
};
