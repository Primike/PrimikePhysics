import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Courses from './components/Courses/Courses';
import Course from './components/Courses/components/Course';
import Grapher from './components/Grapher/Grapher';
import { HashRouter, Route, Routes } from 'react-router-dom';
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
      <HashRouter basename="/primike">
        <Routes>
          <Route path="/PrimikePhysics" element={<Home />} />
          <Route path="/PrimikePhysics/courses" element={<Courses courses={courses} />} />
          <Route path="/PrimikePhysics/numericalmethods" element={<Home />} />
          <Route path="/PrimikePhysics/grapher" element={<Grapher />} />
          {courses.map((course) => (
            <Route 
              path={`/${course.subject}`} 
              key={`${course.subject}course`} 
              element={<Course course={course} />}
            />
          ))}
          <Route path="*" element={<Home />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
