/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  console.log('<=== parent');
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState<number>(0);
  const timerRef = useRef<any>(null);
  const [isRunning, setIsRunning] = useState<boolean>(false);

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
        console.log('SetInterval call');
        
        setCount((count) => {
          if(count <= 1){
            clearInterval(timerRef.current)
            setIsRunning(false)
            return 0
          }
         return count - 1
        });
      }, 1000);
    }

    return () => clearInterval(timerRef.current);
  }, [isRunning]);

  return (
    <>
      <input type='text' className='text' ref={inputRef} />
      <button onClick={handleClick}>increment</button>
      <p>{count}</p>
    </>
  );
}

export default App;
