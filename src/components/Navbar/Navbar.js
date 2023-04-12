import React from 'react';
import './Navbar.css';

function Navbar() {
  const tabNames = ['Home', 'Courses', 'Math', 'Grapher'];
  const hrefLinks = [
    '/PrimikePhysics',
    '/PrimikePhysics/courses',
    '/PrimikePhysics/numericalmethods',
    '/PrimikePhysics/grapher',
  ];

  const list = tabNames.map((name, index) => (
    <div className="navCol" key={name}>
      <a className="navbarLink" href={hrefLinks[index]}>
        {name}
      </a>
    </div>
  ));

  return (
    <div className="navbarDiv">
      <div className="navbarContainer">
        <div className="navRow">
          <div className="navColMd3">
            <a href="/" className="navbarTitle">
              🔬 PrimikePhysics
            </a>
          </div>
          <div className="navColMd3">
            <div className="navRow">{list}</div>
          </div>
        </div>
      </div>
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
