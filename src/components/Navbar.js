import React, { useState } from 'react';
import "./Navbar.css"

function Navbar() {

    const tabNames = ["Home", "Courses", "Math", "Grapher"]
    const hrefLinks = ["/", "courses", "numericalmethods", "grapher"]


    let list = tabNames.map((name, index) => {
        return (
            <div className="col-2" id="navbaritems" key={name}>
                <a id="navbartext" href = {hrefLinks[index]}>{name}</a>
            </div>
        )
    })

    return (
        <nav className="container-fluid">
            <div className='row align-items-center justify-content-between'>
                <div className="col-md-4 fs-2 text-center fw-bold" id="navbartitle">🔭Primike Physics</div>
                <div className="col-md-4 p-3">
                    <div className='row'>
                        {list}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar