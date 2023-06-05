import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./NavLand.css";
import logo from '../assets/logo.png';
const NavLand = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <img src={logo} className="logo"></img>
      <h3>MEDIUM</h3>
      <nav ref={navRef}>
        <div className="links2">
          <span>
            <Link to="/about" style={{color:'black', textDecoration:'none'}}> About</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/contact" style={{color:'black', textDecoration:'none'}}>Contact</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/login" style={{color:'black', textDecoration:'none'}}>Login</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/register" style={{color:'white', textDecoration:'none', borderRadius:'5%', border:'1px solid black', padding:'7px', background:'black'}}>Get Started</Link>
          </span>
        </div>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
};

export default NavLand;
