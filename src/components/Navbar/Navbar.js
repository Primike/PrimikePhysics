import React, { useState } from 'react';
import './Navbar.css';

function Navbar(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const tabNames = ['Home', 'Courses', 'Math', 'Grapher'];
  const hrefLinks = [
    '/',
    '/courses',
    '/numericalmethods',
    '/grapher',
  ];

  const list = tabNames.map((name, index) => {
    return (
      <a className='navbarLink' key={name} href={hrefLinks[index]}>
        {name}
      </a>
    );
  });

  const mobileList = tabNames.map((name, index) => {
    return (
      <a
        className='mobileNavbarLink'
        key={name}
        href={hrefLinks[index]}
        onClick={() => setMobileMenuOpen(false)}
      >
        {name}
      </a>
    );
  });

  return (
    <div className="navbarDiv">
      <div className='navbarContainer'>
        <a href='/' className='navbarTitle'>
          🔬 PrimikePhysics
        </a>
        <div className='navLinks'>{list}</div>
        <button className="mobileMenuButton" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          ☰
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="mobileMenu">
          <button className="mobileMenuClose" onClick={() => setMobileMenuOpen(false)}>
            &times;
          </button>
          <div className="mobileMenuContent">{mobileList}</div>
        </div>
      )}
      {props.children}
    </div>
  );
}

export default Navbar;

