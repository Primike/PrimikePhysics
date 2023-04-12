import './Courses.css'
import Navbar from "../Navbar/Navbar";

function Courses({courses}) { 
    let coursesList2 = courses.map((course, index) => {
        return (
            <div className="courses-card">
                <div className="courses-card-image" style={{ backgroundImage: `url(${course.subject_image})` }}>

                </div>
                <div className="courses-card-content">
                    <h3 className="courses-card-title">{course.subject}</h3>
                    <p className="courses-card-text">Some quick example text to build on the card title and make up the</p>
                </div>
                <button className="courses-card-button"><a className='courses-card-link' href={`/${course.subject}`}>View Course</a></button>
            </div>
        )
    })
    return (
        <div>
            <Navbar/>
            <div className="courses-container">
                {coursesList2}
            </div>
        </div>
    )
}

export default Courses
