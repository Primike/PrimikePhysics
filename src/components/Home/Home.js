import React, { useEffect, useState } from "react";
import "./Home.css"
import Navbar from "../Navbar/Navbar";
import ISS from "./components/ISS";
import Nasa from "./components/Nasa";
// import Mars from "./components/Mars";

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

    return (
        <>
            <Navbar/>
                <div id="home-div">
                    <Nasa dailypic={dailypic}/>
                    <div id="divider"></div>
                    <ISS people={people.people}/>
                    <div id="divider"></div>
                    {/* <Mars marsImages={marsImages}/> */}
                </div>

        </>
    )
}

export default Home