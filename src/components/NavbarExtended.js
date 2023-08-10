import React from "react";
import { Link } from 'react-router-dom';
import "./NavbarExtended.scss";

function Navbar () {
  return (
    <div className="nav-ext">
      <section className="nav-links">
        <p><Link to="/" className='nav-link'>home</Link></p>
        <p><Link to="/work" className='nav-link'>work</Link></p>
        <p><Link to="/about" className='nav-link'>about</Link></p>
        <p><Link to="/contact" className='nav-link'>contact</Link></p>
      </section>
    </div>
  );
};

export default Navbar;
