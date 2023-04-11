import './Courses.css'
import Navbar from "../Navbar/Navbar";

function Courses({courses}) {
    // let courseList = courses.map((course, index) => {
    //     return (
    //         <div className="col-md-2" key={course.subject}>
    //             <div className='card'>
    //                 <img className='card-img-top' src={course.subject_image} id="course-image"/>
    //                 <div className='card-body'>
    //                     <h5 id="course-name">{course.subject}</h5>
    //                     <p id="course-description">Some quick example text to build on the card title and make up the</p>
    //                 </div>
    //                 <div className='card-footer p-3 h-100'>
    //                     <a className="btn btn-primary" href={`/${course.subject}`}>View Course</a>
    //                 </div>
    //             </div>
    //         </div>   
    //     )
    // })

    let coursesList2 = courses.map((course, index) => {
        return (
            <div className="card">
                <div className="card-image" style={{ backgroundImage: `url(${course.subject_image})` }}>

                </div>
                <div className="card-content">
                    <h3 className="card-title">{course.subject}</h3>
                    <p className="card-text">Some quick example text to build on the card title and make up the</p>
                </div>
                <button className="card-button"><a className='card-link' href={`/${course.subject}`}>View Course</a></button>
            </div>
        )
    })
    return (
        <div className='page-wrapper'>
            <Navbar/>
            <div className="container">
                {coursesList2}
            </div>

            {/* <div className ="container-xl" >
                <div className="row row-cols-1">
                    {courseList}
                </div>
            </div> */}
        </div>
    )
}

export default Courses