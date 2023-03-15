import React, { useEffect, useState } from "react";
import "./Home.css"

function Home() {    
    const [dailypic, setDailyPic] = useState()

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=dqeGb7Xo6YTA7eMnGkqvXdpI4j5nsWa8H4YyoBnT')
        .then(res => res.json())
        .then(x => setDailyPic(x))
    }, [])


    return (
        <>
            {dailypic ? 
                <>
                    <div className="container-fluid bg-white" id="nasa-container">
                        <div className="row">
                            <h1 id="welcome-text">Welcome! Here is you NASA pic of the day</h1>
                        </div>
                        <div className="row align-items-center justify-content-evenly" id="nasa-row-div">
                            <div className="col-md-5" id="nasa-image-div">
                                <a href={dailypic.url} >
                                    <img src={dailypic.url} alt={dailypic.title} id="nasa-image"/>
                                </a>
                            </div>
                            <div className="col-md-5" id="nasa-text-div">
                                <h2 id="nasa-title">{dailypic.title}</h2>
                                <p id="nasa-text">{dailypic.date}</p>             
                                <p id="nasa-text">{dailypic.explanation}</p>
                            </div>
                        </div>
                    </div>
                </>
                :
                <></>
            }
        </>
    )
}

export default Home