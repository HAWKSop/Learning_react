import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {


  return (
    <>
     
    <Card username="hawks" btnText='click me'/>
    <Card username="ichigo" />
    </>
  )
}

export default App
