// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 mb-5'> Tailwind </h1>
    <Card username="harry potter"btntext="click me ->"/>
    <Card username="Ron" btntext="visit me->"/>
     
    </>
   
  )
}

export default App
