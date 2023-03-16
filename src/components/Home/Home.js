import React, { useEffect, useState } from "react";
import "./Home.css"

function Home() {    
    const [dailypic, setDailyPic] = useState([])
    const [people, setPeople] = useState([])
    const [marsImages, setMarsImages] = useState([])

    useEffect(() => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=dqeGb7Xo6YTA7eMnGkqvXdpI4j5nsWa8H4YyoBnT')
        .then(result => result.json())
        .then(data => setDailyPic(data))
    }, [])

    useEffect(() => {
        fetch('http://api.open-notify.org/astros.json')
        .then(result => result.json())
        .then(peopleData => setPeople(peopleData))
    }, [])

    useEffect(() => {
        fetch('https://mars-photos.herokuapp.com/api/v1/rovers/curiosity/latest_photos?api_key=DEMO_KEY')
        .then(result => result.json())
        .then(images => setMarsImages(images))
    }, [])

    let peopleList = people.people?.map((person, index) => {
        return (
            <div className="col" id="person-col-div" key={person.name}>
                <div className="card h-100">
                    <div className="card-body">
                        <div className="card-title">
                            {person.name}
                        </div>
                        {/* <div className="card-text">
                            {person.craft}
                        </div> */}
                    </div>
                </div>
            </div>
        )
    })

    let imagesList = marsImages.latest_photos?.slice(0,12).map((image, index) => {
        return (
            <div className="col" key={image.id}>
                <div className="card h-100" id="mars-card">
                    <div className="card-body">
                        <img src={image.img_src} id="mars-image"/>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <>
            {dailypic ? 
                <div id="home-div">
                    <div className="container-fluid" id="nasa-container">
                        <h1 id="nasa-welcome-text">Here is you NASA pic of the day</h1>
                        <div className="row align-items-center justify-content-evenly" id="nasa-row-div">
                            <div className="col-md-5" id="nasa-image-div">
                                <a href={dailypic.url}>
                                    <img src={dailypic.url} alt={dailypic.title} id="nasa-image"/>
                                </a>
                            </div>
                            <div className="col-md-5" id="nasa-text-div">
                                <h1 id="nasa-title">{dailypic.title}</h1>
                                <p id="nasa-date-text">{dailypic.date}</p>             
                                <p id="nasa-text">{dailypic.explanation}</p>
                            </div>
                        </div>
                    </div>

                    <div id="divider"></div>

                    <div className="container-fluid" id="iss-container">
                        <div className="row align-items-center justify-content-evenly g-3">
                            <h1 id="iss-title">There are currently {people.number} people aboard the Internation Space Station</h1>
                            <div className="col-md-5">
                                <div className="row row-cols-2 row-cols-md-4 g-3">
                                    {peopleList}
                                </div>
                            </div>
                            <div className="col-md-5">
                                <img id="iss-image" src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss068e056697.jpg" alt="ISS"/>
                            </div>
                        </div>
                    </div>

                    <div id="divider"></div>

                    {/* <div className="container-md">
                        <div className="row row-cols-2 row-cols-md-4 g-3">
                            {imagesList}
                        </div>
                    </div> */}
                </div>
                :
                <></>
            }
        </>
    )
}

export default Home