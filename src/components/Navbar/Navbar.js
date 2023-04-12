import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
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
      <div className="customContainer">
        <h1 className="homeTitle">Welcome to Primike Physics</h1>
        <h2 className="homeText">Learn physics, math and discover cool stuff!</h2>
        <button className="homeButton" type="button">
          Get Started! ↓
        </button>
      </div>
    </div>
  );
}

export default Navbar;

