import React, { useState, useRef, useEffect } from 'react';
import * as math from 'mathjs';
import functionPlot from 'function-plot';
import './Grapher.css';

const Grapher = () => {
  const [equations, setEquations] = useState([{ expression: 'x' }]);
  const [xRange, setXRange] = useState('-10,10');
  const [yRange, setYRange] = useState('-10,10');
  const chartRef = useRef(null);

  useEffect(() => {
    plotGraph();
  }, []);

  const plotGraph = () => {
    const [xMin, xMax] = xRange.split(',').map(Number);
    const [yMin, yMax] = yRange.split(',').map(Number);

    const validEquations = equations.filter((eq) => eq.expression.trim() !== '');

    functionPlot({
      target: chartRef.current,
      data: validEquations.map((eq) => ({
        fn: eq.expression,
        sampler: 'builtIn',
        graphType: 'polyline',
      })),
      grid: true,
      yAxis: { domain: [yMin, yMax] },
      xAxis: { domain: [xMin, xMax] },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    plotGraph();
  };

  const addEquation = () => {
    if (equations.length < 5) {
      setEquations([...equations, { expression: '' }]);
    }
  };

  const removeEquation = (index) => {
    const newEquations = [...equations];
    newEquations.splice(index, 1);
    setEquations(newEquations);
    plotGraph();
  };

  return (
    <div className="graph-container">
      <div className="container1">
        <form onSubmit={handleSubmit} className="form">
          {equations.map((eq, index) => (
            <div key={index}>
              <label>
                Equation {index + 1}:
                <input
                  className="form-input"
                  type="text"
                  value={eq.expression}
                  onChange={(e) => {
                    const newEquations = [...equations];
                    newEquations[index] = { expression: e.target.value };
                    setEquations(newEquations);
                    plotGraph();
                  }}
                />
              </label>
              {index > 0 && (
                <button
                  type="button"
                  className="button"
                  onClick={() => removeEquation(index)}
                >
                  -
                </button>
              )}
            </div>
          ))}
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
          <button type="button" className="button" onClick={addEquation}>
            Add Equation
          </button>
        </form>
        </div>
      <div className="container2">
        <div ref={chartRef} />
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