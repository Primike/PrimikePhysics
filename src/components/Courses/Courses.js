// import CourseCard from './CourseCard'
import './Courses.css'

function Courses({courses}) {
    let courseList = courses.map((course, index) => {
        return (
            <div className="col-md-2 card" id="course-col" key={course.subject}>
                <img src={course.subject_image} className="card-img-top" id="course-image"/>
                <h1 id="course-name">{course.subject}</h1>
                <p id="course-description">Some quick example text to build on the card title and make up the</p>
                <a href={`/${course.subject}`}  className="btn btn-primary">View Course</a>
            </div>   
        )
    })

    return (
        <div className ="container-fluid" id="courses-container">
            <div className="row justify-content-md-center mx-auto" id="courses-row">
                {courseList}
            </div>
        </div>
    )
}

export default Courses