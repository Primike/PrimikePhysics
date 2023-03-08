import Navbar from './components/Navbar';
import Home from './components/Home/Home'
import Courses from './components/Courses/Courses'
import Course from './components/Courses/Course/Course'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useQuery from './query/useQuery';
import { useEffect, useState } from "react";


function App() {
  const [courses, setCourses] = useState([])

  // const { data: courses } = useQuery('https://primike.github.io/data/primikephysics.json')
  
  useEffect(() => {
    fetch('https://primike.github.io/data/primikephysics.json')
    .then(res => res.json())
    .then(courses => setCourses(courses))
  }, [])

  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="courses" element={<Courses courses={courses}/>} />
          <Route path="numericalmethods" element={<Home />} />
          <Route path="grapher" element={<Home />} />
          <Route path="graph" element={<Home />} />
          {courses.map((course) => (
              <Route 
                path = {`/${course.subject}`} 
                key ={`${course.subject}course`} 
                element={<Course course={course}/>}/>
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
