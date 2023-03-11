import React, { useEffect, useRef } from "react";
import functionPlot from "function-plot";

function Graph({equation = "x", derivative = "1"}) {
  const graphRef = useRef(null);

  useEffect(() => {
    console.log(equation)
    try {functionPlot({
        title: `y = ${equation}`,
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
            fn: `${equation}`,
            derivative: {
                fn: `${derivative}`,
                updateOnMouseMove: true
            }
            }
        ]
        })
    } catch {
        functionPlot({
            title: `y = ${equation}`,
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
                fn: `x^2`,
                derivative: {
                    fn: `x`,
                    updateOnMouseMove: true
                }
                }
            ]
            })
    }
  }, [equation, derivative]);

  return <div ref={graphRef} />;
}

export default Graph;
