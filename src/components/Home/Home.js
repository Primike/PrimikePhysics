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
                <div className="container-fluid">
                    <div className="row align-items-center gx-5">
                        <div className="col-md-6" id="nasaimagediv">
                            <a href={dailypic.url} >
                                <img src={dailypic.url} alt={dailypic.title} className="img" id="nasaimage"/>
                            </a>
                        </div>
                        <div className="col-md-6">
                            <h1 className = "welcomenasa">Welcome! Here is you NASA pic of the day</h1>
                            <h2>{dailypic.title}</h2>
                            <h3>{dailypic.date}</h3>             
                            <p>{dailypic.explanation}</p>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </>
    )
}

export default Home