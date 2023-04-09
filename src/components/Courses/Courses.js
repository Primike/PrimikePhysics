import './Courses.css'

function Courses({courses}) {
    let courseList = courses.map((course, index) => {
        return (
            <div className="col-md-2" key={course.subject}>
                <div className='card'>
                    <img className='card-img-top' src={course.subject_image} id="course-image"/>
                    <div className='card-body'>
                        <h5 id="course-name">{course.subject}</h5>
                        <p id="course-description">Some quick example text to build on the card title and make up the</p>
                    </div>
                    <div className='card-footer p-3 h-100'>
                        <a className="btn btn-primary" href={`/${course.subject}`}>View Course</a>
                    </div>
                </div>
            </div>   
        )
    })

    return (
        <div className ="container-xl" >
            <div className="row row-cols-1">
                {courseList}
            </div>
        </div>

    )
}

export default Courses