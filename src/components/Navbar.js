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
        <div className="container-fluid" id="navbar-container">
            <div className='row justify-content-evenly row align-items-center'>
                <div className="col-md-3" id="navbar-title">Primike Physics🔭</div>
                <div className="col-md-3">
                    <div className='row flex-nowrap'>
                        {list}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar