import { useCallback, useState, useEffect ,useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

// ****************UseEffect, useRef,and useCallback******************

// useCallback jab koi value run karte h to usko memoriese(yaad ) kar leta h 
// then fir se new ke liye run karta h jaise setpass ko memoriese kar lega cache me 
// then next time for se run karte hue dhyan rakhega

function App() {
  const [length,setLength]=useState(8)
  const [num_allowed,setNum_allowed] =useState(false)
  const [char_allowed,setChar_allowed]=useState(false)
  const [pass,setPass]=useState("")

  // refrance hook ham isliye use kiye h ki ham user to better UI provied kar 
  // ske jaise agar ham pass ko copy kar rhe h then jaise hi copy ka button click
  // hoga jaise hi utna pass select ho jayega jitna copy hua h 
  const passRef=useRef(null); 

  const passGenerator=useCallback( ()=>{
    let str="ABCDEFGHIJKLMNOPQSTRUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""

    if(num_allowed) str+="0123456789";
    if(char_allowed) str+="!@#$%^&*()_+}{][|\?/><.,:;~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      
    }
    setPass(pass);

  }
    ,[length, num_allowed, char_allowed,setPass]);

    const copyPasswordToClipboard=useCallback(() =>{
      passRef.current?.select()
      window.navigator.clipboard.writeText(pass)
    },
    [pass])

// use Effect is liye use hua jaise ki isme jo bhi diya gya h 
// jaise length,num_allowed,char_allowed etc inme se agar koi bhi change hota h to 
// pura code fir se run hoga 
// jaise agar ham length change ar rhe h to har baar diff pass genrate ho ja rha h 


    useEffect(() => {
      passGenerator()
    }, [length, num_allowed, char_allowed, passGenerator])  

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
        
    </div>
    <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input 
        type="range"
        min={6}
        max={100}
        value={length}
         className='cursor-pointer'
         onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={num_allowed}
          id="numberInput"
          onChange={() => {
              setNum_allowed((prev) => !prev);
          }}
      />
      <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={char_allowed}
              id="characterInput"
              onChange={() => {
                  setChar_allowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
    </div>
</div>
   
      
  )
}

export default App
