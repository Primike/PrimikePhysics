function Nasa({dailypic}) {
    if (!dailypic) {
        return <div>Loading...</div>;
    }

    return (
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
    )
}

export default Nasa