import React, { useState } from 'react';
import "./Navbar.css"

function Navbar() {

    const tabNames = ["Home", "Courses", "Math", "Grapher"]
    const hrefLinks = ["/", "courses", "numericalmethods", "grapher"]


    let list = tabNames.map((name, index) => {
        return (
            <div className="col" id="navbaritems" key={name}>
                <a id="navbartext" href = {hrefLinks[index]}>{name}</a>
            </div>
        )
    })

    return (
        <div className="container-fluid" id="navbar-container">
            <div className='row justify-content-evenly'>
                <div className="col-md-4" id="navbartitle">Primike Physics🔭</div>
                <div className="col-md-3">
                    <div className='row text-center'>
                        {list}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar