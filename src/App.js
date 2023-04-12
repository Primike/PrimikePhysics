import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Course from './components/Courses/components/Course';
import Grapher from './components/Grapher/Grapher';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from "react";


function App() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch('https://primike.github.io/data/primikephysics.json')
      .then(res => res.json())
      .then(courses => setCourses(courses))
  }, []);
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="courses" element={<Courses courses={courses} />} />
          <Route path="numericalmethods" element={<Home />} />
          <Route path="grapher" element={<Grapher />} />
          {courses.map((course) => (
            <Route 
              path={`${course.subject}`} 
              key={`${course.subject}course`} 
              element={<Course course={course} />}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
