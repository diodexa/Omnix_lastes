
import './App.css'
import Counter from './components/StateRef'
import TypingDetector from './components/TypingActivityDetector'
import CountPrevCurrent from './components/UseRefCountPrev'

function App() {


  return (
    <>
    <div className='flex justify-center items-center h-screen'>
      {/* <Counter/> */}
      {/* <CountPrevCurrent/> */}
      <TypingDetector/>
    </div>
    </>
  )
}

export default App
