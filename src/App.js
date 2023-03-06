import Navbar from './components/Navbar';
import Home from './components/Home/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="courses" element={<Home />} />
          <Route path="numericalmethods" element={<Home />} />
          <Route path="grapher" element={<Home />} />
          <Route path="graph" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
