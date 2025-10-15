import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
function App() {
  const count = useSelector((state)=>state.counter.count)
const bgcolor=useSelector((state)=>state.theme.background)
const dispatch = useDispatch()


const color = bgcolor === "white" ?  "black":"white"


return(
  <>
<div style={{background:bgcolor , height:"100vh", color:color}}>
  <div>{count}</div>
  <button onClick={()=>dispatch({type:"increment",})}>increase</button>
  <button onClick={()=>dispatch({type:"decrement",})}>decrease</button>
  <button onClick={()=>dispatch(bgcolor === "white" ?{type:"black"}:{type:"white"})}>color</button>

  </div>
  </>
)
}

export default App
