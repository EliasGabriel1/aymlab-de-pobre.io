import React, { useState, useEffect, useRef } from "react";
import "./geral.css"

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
  var clientX
  var clientY

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

  document.addEventListener('mousemove', function (event) {
    var bodyAfter = document.querySelector('.after');
    if (bodyAfter !== null) {
      clientX = event.clientX;
      clientY = event.clientY;
      bodyAfter.style.left = clientX + 'px';
      bodyAfter.style.top = clientY + 'px';
      console.log(`Coordenadas do cursor do mouse: ${clientX}, ${clientY}`);
    }
  });


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
    <>
      <div className="after"></div>
      <div className="boxcontent" style={{ width: "fit-content", backgroundColor: "#ffffff9c", boxShadow: '1px 2px 9px #F4AAB9', padding: "5px 10px", borderRadius: "9px", margin: "10px" }}>
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
                width: "265px",
                height: "498px",
                backgroundImage: `url(https://i.postimg.cc/yxZWFQHT/Group-1258.png)`,
                cursor: `url(https://raw.githubusercontent.com/EliasGabriel1/aymlab-de-pobre.io/ee30ff324f3b48e29300a29894c86009ba5b528c/public/gun.svg),default`
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

      <p className="copyright"><a href="https://github.com/EliasGabriel1">
        my github
        <svg height="32" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="32" data-view-component="true" class="octicon octicon-mark-github v-align-middle">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
        </svg>
      </a></p>
    </>
  );
}

export default App;
