import React, { useState, useEffect, useRef } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [targetPosition, setTargetPosition] = useState({
    x: Math.floor(Math.random() * 500),
    y: Math.floor(Math.random() * 500)
  });
  const [isStarted, setIsStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timerIntervalRef = useRef(null);

  const startExercise = () => {
    setIsStarted(true);
    setIsFinished(false)
    setTimeLeft(30);
    setScore(0)
    setTargetPosition({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    });
  };

  const stopExercise = () => {
    clearInterval(timerIntervalRef.current);
    setIsStarted(false);
  };
  
  const handleTargetClick = () => {
    setScore(score + 1);
    setTargetPosition({
      x: Math.floor(Math.random() * 500),
      y: Math.floor(Math.random() * 500)
    });
  };
  
  useEffect(() => {
    
    if (isStarted && !isFinished) {
      timerIntervalRef.current = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime > 0) {
            return prevTime - 1;
          } else {
            clearInterval(timerIntervalRef.current);
            setIsFinished(true);
            return 0;
          }
        });
      }, 1000);
    }

  }, [isStarted, isFinished]);

  return (
    <div>
      <h2>aim lab de pobre</h2>
      {!isStarted && !isFinished && (
        <button onClick={startExercise}>Começar</button>
      )}
      {isStarted && !isFinished && (
        <div>
          <div>Pontos: {score}</div>
          <div>Tempo restante: {timeLeft}</div>
          <div
            style={{
              position: "absolute",
              left: targetPosition.x,
              top: targetPosition.y,
              width: "30px",
              height: "30px",
              backgroundColor: "red",
              cursor: "crosshair",
              borderRadius: "50%"
            }}
            onClick={handleTargetClick}
          />
          <button onClick={stopExercise}>Parar</button>
        </div>
      )}
      {isFinished && (
        <div>
          <h3>JÁ É!</h3>
          <div>Pontos: {score}</div>
          <div>Tempo gasto: {30 - timeLeft}</div>
          <button onClick={startExercise}>Começar</button>
        </div>
      )}
    </div>
  );
}

export default App;
