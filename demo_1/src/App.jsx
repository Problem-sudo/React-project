import { useState } from 'react'    // use for hooks 

function App() {

// let counter=15 
const [counter,setCounter]=useState(15);
const addValue = () =>
{
  // counter=counter+1
  setCounter(counter+1)
  // setCounter
  
}
const removeValue =()=>
{
  // counter=counter-1
  setCounter(counter-1)
  if(counter < 0)
  {
    return (
      <h3>can't get negative number</h3>
    )
  }
}


  return (
    <>
    <h1>
      counter
    </h1>
    <h2>counter value:{counter}</h2> 
    
    <button
    onClick={addValue}>add value</button>
    < br />
  
    <button onClick={removeValue}>remove value</button>

    </>

  )
}

export default App;
