import './App.css'
import { Clock, Timer } from './components'

function App() {


  return (
    <div className=' md:h-screen flex items-center justify-center '>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-1 '>
        <Clock/>
        {/* <Timer/> */}
      </div>
      <div className='absolute bottom-4 flex gap-8'>
        <a className='underline' href="https://github.com/Shubham-yelekar/react-widgets" target='_blank'>Project repo ⬈</a>
        <a className='underline' href="https://shubhamyelekar.vercel.app/" target='_blank'>My website ⬈</a>
      </div>
    </div>
  )
}

export default App
