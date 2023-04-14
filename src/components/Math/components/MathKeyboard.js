import React from 'react';

const MathKeyboard = ({ inputRef }) => {
  const symbols = [
    { label: '+', cmd: '+' },
    { label: '-', cmd: '-' },
    { label: '×', cmd: '\\times' },
    { label: '÷', cmd: '\\div' },
    { label: '^', cmd: '^' },
    { label: '√', cmd: '\\sqrt' },
    { label: '(', cmd: '(' },
    { label: ')', cmd: ')' },
    { label: 'π', cmd: '\\pi' },
  ];

  const handleClick = (cmd) => {
    if (inputRef.current) {
      inputRef.current.cmd(cmd);
      inputRef.current.focus();
    }
  };

  return (
    <div className="math-keyboard">
      {symbols.map((symbol, index) => (
        <button
          key={index}
          className="math-keyboard-button"
          onClick={() => handleClick(symbol.cmd)}
        >
          {symbol.label}
        </button>
      ))}
    </div>
  );
};

export default MathKeyboard;
