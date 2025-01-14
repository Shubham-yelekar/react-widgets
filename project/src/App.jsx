import './App.css'
import { Clock, Timer } from './components'

function App() {


  return (
    <div className=' md:h-screen flex items-center justify-center '>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 '>
        <Clock/>
        {/* <Timer/> */}
      </div>
    </div>
  )
}

export default App
