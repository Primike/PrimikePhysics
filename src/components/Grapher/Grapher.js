import { useState } from "react";
import Graph from './Graph.tsx'
import Navbar from "../Navbar/Navbar.js";

function Grapher() {
    const [eqn, setEqn] = useState('x');
    const [der, setDer] = useState('1');


    return (
        <>
            <Navbar/>
            <div className = "numericalmethoddiv">        
                <form>
                    <h1 className="methodtitle">Function Grapher</h1>
                    <h3>Equation:</h3>
                    <input width={4} placeholder='Equation' onChange={(e) => setEqn(e.target.value)}/>
                    <h3>Derivative(Optional):</h3>
                    <input width={4} placeholder='Derivative' value = {der} onChange={(e) => setDer(e.target.value)}/>
                    <button >button</button >
                    <h2>Use exp(x) for e^x</h2>
                    <h2>Use log(x) for ln(x)</h2>
                </form>
                <div>
                    <Graph equation={eqn} derivative={der}/>
                </div>
            </div>
        </>
    )
}

export default Grapher