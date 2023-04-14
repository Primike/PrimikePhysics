// MathInput.js
import React from 'react';
import 'mathquill/build/mathquill.css';
import { addStyles, EditableMathField } from 'react-mathquill';

// Required to apply styles for react-mathquill
addStyles();

const MathInput = ({ setEnteredEquation }) => {
  return (
    <EditableMathField
      className="math-input"
      latex=""
      config={{
        autoCommands: 'pi sqrt',
      }}
      onKeyDown={(mathField, event) => {
        if (event && event.key === '^') {
          event.preventDefault();
          mathField.cmd('^');
          mathField.keystroke('Up');
        }
      }}
      onChange={(mathField) => setEnteredEquation(mathField)}
    />
  );
};

export default MathInput;
