import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import TodoApp from './todo'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isShow,setIsShow] = useState(false)
  const [userInput, setUserInput] = useState('')

  const increaseCount = () => {
    console.log(count);
    setCount((prev) => prev + 1)
  }

  const showDiv = () => {
    setIsShow(!isShow)
  }


  return (
    <>
      <TodoApp></TodoApp>
     <h2>{count}</h2>
     <button onClick={increaseCount}> click to increase</button>


     {isShow ? <div className='div-new'>showoooowowow</div> : null}
     <button onClick={showDiv}> show/hide </button>

     <div>
      <div>{userInput}</div>
      <input 
        type="text" 
        placeholder='enter your text' 
        onChange={(e) => setUserInput(e.target.value)}
      />
     </div>
    </>
  )
}

export default App
