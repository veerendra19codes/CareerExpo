import { NavLink, useNavigate } from "react-router-dom";
import { Menu , X } from "lucide-react";
import { useRef } from "react";
import { useCookies } from "react-cookie";


export const Navbar = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["access_token"]);

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  }

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    console.log("clicked");
  }

  return (
    <div className="navbar">
      <h3>CareerExpo</h3>
      <nav ref={navRef}>
        <NavLink className="link" onClick={showNavbar} to="/"> Home </NavLink>
        <NavLink className="link" onClick={showNavbar} to="/assessment"> Assessment</NavLink>
        <NavLink className="link" onClick={showNavbar} to="/career"> Career</NavLink>
        <NavLink className="link" onClick={showNavbar} to="/dashboard"> Dashboard</NavLink>
        {!cookies.access_token ? (<NavLink className="link" onClick={showNavbar} to="/auth">Login</NavLink>) : (<button onClick={logout}>Log out</button> )}
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
