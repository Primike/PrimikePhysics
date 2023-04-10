import React, { useEffect, useRef } from "react";
import functionPlot from "function-plot";

function Graph({equation = "x", derivative = "1"}) {
  const graphRef = useRef(null);

  let graph = function(x, xprime) {
    functionPlot({
        title: `y = ${x}`,
        target: "#root",
        width: 400,
        height: 400,
        xAxis: {
            label: 'x - axis',
            domain: [-10, 10]
        },
        yAxis: { 
            label: 'y - axis',
            domain: [-10, 10] },
        grid: true,
        data: [
            {
            fn: `${x}`,
            derivative: {
                fn: `${xprime}`,
                updateOnMouseMove: true
            }
            }
        ]
        })
  }
  useEffect(() => {
    console.log(equation)
    try {
        graph(equation,derivative)
    } catch {
        graph("x^2", "1")
    }
  }, [equation, derivative]);

  return <div ref={graphRef} />;
}

export default Graph;
