import { useEffect, useRef, useState } from "react"

export default function Stopwatch() {
  const [count, setCount] = useState(0)
  const [isRunning, setIsRunning] = useState(true)

  const intervalRef = useRef<number | null>(null)
  const isRunningRef = useRef(isRunning)

  // sync ref dengan state
  useEffect(() => {
    isRunningRef.current = isRunning
  }, [isRunning])

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      if (isRunningRef.current) {
        setCount((prev) => prev + 1)
      }
    }, 1000)

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [])

  return (
    <div>
      <h1>Count : {count}</h1>
      <h1>Status : {isRunning ? "Running" : "Paused"}</h1>
      <div style={{display:"flex", gap:"10px"}}>

      <button onClick={() => setIsRunning((prev) => !prev)} style={{border:"2px solid", padding:"0.5rem"}}>
        {isRunning ? "Pause" : "Resume"}
      </button>

      <button onClick={() => setCount(0)} style={{border:"2px solid", padding:"0.5rem"}}>Reset</button>
      </div>
    </div>
  )
}

