import React, {useState, useRef, useEffect} from 'react';

const App =() => {

    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer =() => {
        if(isRunning) return;
        setIsRunning(true);
        intervalRef.current = setInterval(() =>{
            setTimer((prev) => prev + 1);
        },1000)
    }

    const stopTimer = () =>{
        clearInterval(intervalRef.current);
        setIsRunning(false);
    }

    const resetTimer =() =>{
        clearInterval(intervalRef.current);
        setTimer(0);
        setIsRunning(false);
    }

    useEffect(() => {
        return () => clearInterval(intervalRef.current);
    }, []);
    
    return (
        <div>
            <div className="timer-container">
              <h1 className="timer-display">Time: {timer}s</h1>
              <button className="timer-button start-button" onClick={startTimer}>Start</button>
              <button className="timer-button stop-button" onClick={stopTimer}>Stop</button>
              <button className="timer-button reset-button" onClick={resetTimer}>Reset</button>

            </div>
        </div>
    )
}

export default App