import React, { useState } from 'react';
import "./Navbar.css"

function Navbar() {

    const tabNames = ["Home", "Courses", "Math", "Grapher"]
    const hrefLinks = ["/", "courses", "numericalmethods", "grapher"]


    let list = tabNames.map((name, index) => {
        return (
            <div className="col" key={name}>
                <a id="navbar-link" href = {hrefLinks[index]}>{name}</a>
            </div>
        )
    })

    return (
        <div id='navbar-div'>
            <div className="container-fluid" id="navbar-container">
                <div className='row justify-content-evenly row align-items-center'>
                    <div className="col-md-3">
                        <a href='/' id="navbar-title">🔬 PrimikePhysics</a>
                    </div>
                    <div className="col-md-3">
                        <div className='row flex-nowrap'>
                            {list}
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-lg' id='custom-container'>
                <h1 id='home-title'>Welcome to Primike Physics</h1>
                <h2 id='home-text'>Learn physics, math and discover cool stuff!</h2>
                <button className="btn btn-primary" id='home-button' type="button">Get Started! ↓</button>
            </div>
        </div>
    )
}

export default Navbar