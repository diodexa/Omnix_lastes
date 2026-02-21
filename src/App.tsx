
import './App.css'
import ScrollDetector from './components/ScrollDirrectionDetector'
import Counter from './components/StateRef'
import TypingDetector from './components/TypingActivityDetector'
import CountPrevCurrent from './components/UseRefCountPrev'

function App() {


  return (
    <>
    <div className='flex justify-center items-center '>
      {/* <Counter/> */}
      {/* <CountPrevCurrent/> */}
      {/* <TypingDetector/> */}
      <ScrollDetector/>
    </div>
    </>
  )
}

export default App
