const ISS = ({ people }) => {
    if (!people) {
      return <div>Loading...</div>;
    }
  
    return (
      <div className="two-containers">
        <div className="container1">
          {people.people?.map((person, index) => (
            <div className="card" key={index}>
              <div className="card-inner">
                <div className="card-front">
                  <p>{person.name}</p>
                </div>
                <div className="card-back">
                  <p>{person.craft}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="container2">
          <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/iss068e056697.jpg" alt="Centered" className="center-image" />
        </div>
      </div>
    );
  };
  
export default ISS