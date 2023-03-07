// import CourseCard from './CourseCard'
import './Courses.css'

function Courses({courses}) {
    let courseList = courses.map((course, index) => {
        return (
            <div className="col-md card">
                <img src={course.subject_image} id="course-image"/>
                <div className="card-body">
                    <h5 className="card-title">{course.subject}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">View Course</a>
                </div>
            </div>   
        )
    })

    return (
        <div className ="container-fluid p-3">
            <div className="row justify-content-md-center">
                {courseList}
            </div>
        </div>
    )
}

export default Courses