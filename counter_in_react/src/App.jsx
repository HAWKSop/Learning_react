import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App(){

  let [Counter,setCounter] = useState(0)
  var data = ''
  const addValue = () =>{
    if (Counter== 25){
      data = "Cant add more"
      console.log("Cant add more")
    }
    else{
    setCounter(Counter += 1);
    console.log("value added", Counter);
    }
  }


  const rmval = ()=> {
    if (Counter == 0){
      data = "cant remove more"
      console.log("value is 0 cant go any lower")
    }
    else{
    setCounter(Counter-1)
    console.log("Value removed", Counter)
    }
  }


  return(
    <>
    <h1>Counter in React</h1>
    <h2>counter value : {Counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br/>
    <br/>
    <button onClick={rmval}>Remove Value</button>
    
  
    </>
  )
}

export default App
