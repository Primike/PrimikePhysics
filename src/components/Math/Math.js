import React, { useState } from 'react';
import "./Math.css"
import MathInput from './components/MathInput';
import Navbar from "../Navbar/Navbar"
import { InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';

function Math() {
    const [enteredEquation, setEnteredEquation] = useState('');
    const [submittedEquation, setSubmittedEquation] = useState('');
    const [resultMessage, setResultMessage] = useState('');

    // Predefined equation string for comparison
    const correctEquation = 'x=y^2';
    const questionEquation = 'x = y^2';
  
    const handleSubmit = () => {
      const enteredLatex = enteredEquation.latex();
      setSubmittedEquation(enteredLatex);
      if (enteredLatex === correctEquation) {
        setResultMessage('Correct!');
      } else {
        setResultMessage('Incorrect. Try again.');
      }
    };
  
    return (
        <>
            <Navbar></Navbar>
            <div className="App">
                <h1>Math Problem</h1>
                <div className="question">
                  <h2>Solve the following equation:</h2>
                  <InlineMath math={questionEquation} />
                </div>
                <div className="user-input">
                  <h3>Enter your answer:</h3>
                  <MathInput setEnteredEquation={setEnteredEquation} />
                </div>
                <div className="submit-button" style={{ display: 'flex', alignItems: 'center', marginTop: '1rem' }}>
                  <button onClick={handleSubmit} style={{ marginRight: '1rem' }}>
                    Submit
                  </button>
                  <div className="result-message">{resultMessage}</div>
                </div>
            </div>
        </>
    )
}

export default Math;
