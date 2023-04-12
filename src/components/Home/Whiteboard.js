import React, { useRef, useEffect, useState } from 'react';

function Whiteboard() {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [mode, setMode] = useState('draw');

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.9;
    canvas.height = window.innerHeight * 0.7;
    canvas.style.width = `${window.innerWidth * 0.9}px`;
    canvas.style.height = `${window.innerHeight * 0.7}px`;

    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.lineWidth = 5;
    context.fillStyle = 'white';
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.strokeStyle = 'black';
    contextRef.current = context;
  }, []);

  const getCoordinates = (event) => {
    const { offsetX, offsetY } = event.touches ? event.touches[0] : event;
    return { offsetX, offsetY };
  };

  const startDrawing = (event) => {
    event.preventDefault();
    const { offsetX, offsetY } = getCoordinates(event);
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    canvasRef.current.addEventListener('mousemove', draw);
    canvasRef.current.addEventListener('touchmove', draw);
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    canvasRef.current.removeEventListener('mousemove', draw);
    canvasRef.current.removeEventListener('touchmove', draw);
  };

  const draw = (event) => {
    event.preventDefault();
    const { offsetX, offsetY } = getCoordinates(event);
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const switchMode = (newMode) => {
    setMode(newMode);
    contextRef.current.strokeStyle = newMode === 'draw' ? 'black' : 'white';
    contextRef.current.lineWidth = newMode === 'draw' ? 5 : 20;
  };

  return (
    <div>
      <button onClick={() => switchMode('draw')}>Draw</button>
      <button onClick={() => switchMode('erase')}>Erase</button>
      <canvas
        className="whiteboardCanvas"
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onTouchStart={startDrawing}
        onTouchEnd={stopDrawing}
        ref={canvasRef}
      />
    </div>
  );
}

export default Whiteboard;
