/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from "react";
import "./styles.css";

function App() {
  console.log("<=== parent");
  const inputRef = useRef(null);
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);

  function handleClick() {
    if (inputRef.current) {
      const val = Number.parseInt(inputRef.current.value);
      setCount(val);
      setIsRunning(true);
    }
  }

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        console.log("SetInterval call");

        setCount((count) => {
          if (count <= 1) {
            clearInterval(timerRef.current);
            setIsRunning(false);
            return 0;
          }
          return count - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  return (
    <>
      <input type="text" className="text" ref={inputRef} />
      <button onClick={handleClick}>increment</button>
      <p>{count}</p>
    </>
  );
}

export default App;
