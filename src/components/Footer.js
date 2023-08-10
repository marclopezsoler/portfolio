import React from 'react';
import { Link } from 'react-router-dom';
import "./Footer.scss";

function Footer () {
  return (
    <div className='fut-parent'>
      <div className='fut-link-parent'>
         <a><Link to="/" className='fut-link'>Home</Link></a>
         <a><Link to="/work" className='fut-link'>Work</Link></a>
         <a><Link to="/about" className='fut-link'>About</Link></a>
         <a><Link to="/contact" className='fut-link'>Contact</Link></a>
         <a><Link to="https://www.linkedin.com/in/marc-l%C3%B3pez-soler-aab6b81a3/" target="_blank" className='fut-link'>Linkedin</Link></a>
         <a><Link to="https://www.instagram.com/lopezsmarc/" target="_blank" className='fut-link'>Instagram</Link></a>
         <a><Link to="https://twitter.com/marclopezsoler" target="_blank" className='fut-link'>Twitter</Link></a>
         <a href={process.env.PUBLIC_URL + '/CV_2023_MarcLopez.pdf'} target="_blank" className='fut-link'>CV</a>
      </div>
      <div className="fut-link-parent">
         {/* <p className="fut-text">Version 1.7.4</p> */}
         <p className="fut-text"> © 2023 Portfolio by Marc López</p>
      </div>
      <div className='construction-parent'>
         <p className='construction-text'>THIS SITE IS UNDER DEVELOPMENT</p>
         <img src={process.env.PUBLIC_URL + '/under_construction.png'} alt='under construction' className='construction-image'></img>
      </div>
   </div>
  )
}

export default Footer