function Mars({marsImages}) {
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
        <div className="container-md">
            <div className="row row-cols-2 row-cols-md-4 g-3">
                {imagesList}
            </div>
        </div>

    )
}

export default Mars