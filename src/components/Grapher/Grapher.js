import React, { useState, useRef, useEffect } from 'react';
import * as math from 'mathjs';
import functionPlot from 'function-plot';
import './Grapher.css';

const Grapher = () => {
  const [equation, setEquation] = useState('x');
  const [xRange, setXRange] = useState('-10,10');
  const [yRange, setYRange] = useState('-10,10');
  const chartRef = useRef(null);

  useEffect(() => {
    plotGraph();
  }, []);

  const plotGraph = () => {
    const [xMin, xMax] = xRange.split(',').map(Number);
    const [yMin, yMax] = yRange.split(',').map(Number);

    functionPlot({
      target: chartRef.current,
      data: [
        {
          fn: equation,
          sampler: 'builtIn',
          graphType: 'polyline',
        },
      ],
      grid: true,
      yAxis: { domain: [yMin, yMax] },
      xAxis: { domain: [xMin, xMax] },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    plotGraph();
  };

  return (
    <div className="graph-container">
      <div className="container1">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Equation:
            <input
              className="form-input"
              type="text"
              value={equation}
              onChange={(e) => setEquation(e.target.value)}
            />
          </label>
          <label>
            X Range (min,max):
            <input
              className="form-input"
              type="text"
              value={xRange}
              onChange={(e) => setXRange(e.target.value)}
            />
          </label>
          <label>
            Y Range (min,max):
            <input
              className="form-input"
              type="text"
              value={yRange}
              onChange={(e) => setYRange(e.target.value)}
            />
          </label>
          <button type="submit" className="button">
            Plot Graph
          </button>
        </form>
      </div>
      <div className="container2">
        <div ref={chartRef} className="plot-container" />
      </div>
    </div>
  );
};





// import { useState } from "react";
// import Graph from './Graph.tsx'
// import Navbar from "../Navbar/Navbar.js";

// function Grapher() {
//     const [eqn, setEqn] = useState('x');
//     const [der, setDer] = useState('1');


//     return (
//         <>
//             <Navbar/>
//             <div className = "numericalmethoddiv">        
//                 <form>
//                     <h1 className="methodtitle">Function Grapher</h1>
//                     <h3>Equation:</h3>
//                     <input width={4} placeholder='Equation' onChange={(e) => setEqn(e.target.value)}/>
//                     <h3>Derivative(Optional):</h3>
//                     <input width={4} placeholder='Derivative' value = {der} onChange={(e) => setDer(e.target.value)}/>
//                     <button >button</button >
//                     <h2>Use exp(x) for e^x</h2>
//                     <h2>Use log(x) for ln(x)</h2>
//                 </form>
//                 <div>
//                     <Graph equation={eqn} derivative={der}/>
//                 </div>
//             </div>
//         </>
//     )
// }

export default Grapher