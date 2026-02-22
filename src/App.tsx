
import './App.css'
import OutsideDetector from './components/ClickOutsideDetector'
import ScrollDetector from './components/ScrollDirrectionDetector'
import Counter from './components/StateRef'
import Stopwatch from './components/Stopwatch'
import TypingDetector from './components/TypingActivityDetector'
import CountPrevCurrent from './components/UseRefCountPrev'

function App() {


  return (
    <>
    <div className='flex justify-center items-center '>
      {/* <Counter/> */}
      {/* <CountPrevCurrent/> */}
      {/* <TypingDetector/> */}
      {/* <ScrollDetector/> */}
      {/* <Stopwatch/> */}
      <OutsideDetector/>
    </div>
    </>
  )
}

export default App
