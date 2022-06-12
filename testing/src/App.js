import React,{useState,useEffect} from 'react';
import './App.css';

function App() {
  const [count,SetCount] = useState(0);
  useEffect(()=>{
    console.log("changed")
  },[count])

  return (
    <>
    <div className='text-center'>
    <h1>{count}</h1>
    <button onClick={()=>{SetCount(count+1)}}>Increase</button>
    <button onClick={()=>{SetCount(count-1)}}>Decrease</button>
    </div>
    </>
  );
}

export default App;
