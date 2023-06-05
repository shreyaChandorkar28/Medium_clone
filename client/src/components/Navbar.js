import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '../assets/logo.png';
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header className="header2">
      <img src={logo} className="logo"></img>
      <h3>MEDIUM</h3>
      <nav ref={navRef}>
        <div className="links">
          <span>
            <Link to="/Home2" style={{color:'black', textDecoration:'none'}}>Home</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <select onChange={(e) => window.location.href = `/posts?cat=${e.target.value}`}>
              <option value="">All Categories</option>
              <option value="art">Art</option>
              <option value="science">Science</option>
              <option value="technology">Technology</option>
              <option value="movie">Movie</option>
              <option value="fashion">Fashion</option>
              <option value="food">Food</option>
            </select>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/write" style={{color:'black', textDecoration:'none'}}>Write</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/myblogs" style={{color:'black', textDecoration:'none'}}>My Blogs</Link>
          </span>
          &nbsp;&nbsp;&nbsp;
          <span>
            <Link to="/login" style={{color:'black', textDecoration:'none'}}>Logout</Link>
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

export default Navbar;
