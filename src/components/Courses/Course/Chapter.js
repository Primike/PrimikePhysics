function Chapter({chapter}) {
    return (
        <div className="container-fluid">
            <div className="row justify-content-md-center">
                <div className="col-md-5">
                    <img src={chapter.image} alt={chapter.title} id="chapter-image"/>
                </div>
                <div className="col-md-5">
                    <h1>{chapter.title}</h1>
                    <p>{chapter.content}</p>
                </div>
            </div>
        </div>
    )
}

export default Chapter