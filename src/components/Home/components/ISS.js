
function ISS({people}) {
    if (!people) {
        return <div>Loading.....</div>
    }
    let image = "https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss068e056697.jpg"

    return (
        <>
            <h1 className="iss-title">There are currently {people.length} people onboard the International Space Station</h1>
            <div className="iss-div">
                <div className="iss-people-container">
                    {people.map((person, index) => (
                        <div className="iss-card" key={person.name}>
                            <div className="iss-card-inner">
                                <div className="iss-card-front">
                                    <p>{person.name}</p>
                                </div>
                                <div className="iss-card-back">
                                    <p>Craft: ISS</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="iss-image-container">
                    <img src={image} alt="Centered" className="center-image" />
                </div>
            </div>
        </>

    )
}


export default ISS