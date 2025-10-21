import { useDispatch, useSelector } from "react-redux";
import { Fetch } from "./api";
import { useEffect, useState } from "react";
import { increment,decrement,edit } from "./appReducer";

import { selectComplete } from "./appReducer";



export default function App() {
  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(Fetch());
  }, []);
  const counter = useSelector((state)=>state.counter.value)
  const data = useSelector((state)=>state.users.data)
  const datas = useSelector(selectComplete)
  console.log(counter);
  console.log(datas)
  return (
    <>
    <h1>{counter}</h1>
    <button className="border" onClick={()=>dispatch(increment())}>+</button>
    <button className="border" onClick={()=>dispatch(decrement())}>+</button>
   {data.map((item)=><h4 key={item.id}>{item.name}<input onClick={()=>dispatch(edit(item.id))}  checked={item.complete} type="radio" /></h4>)}
    </>
  );
}
