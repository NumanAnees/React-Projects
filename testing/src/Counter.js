import React,{useState,useEffect} from 'react';
import './App.css';

function Counter() {
  const [count,SetCount] = useState(0);

  return (
    <>
    <div className='text-center mt-4'>
    <h1>{count}</h1>
    <button onClick={()=>{SetCount(count+1)}} className="btn btn-success m-2">Increase</button>
    <button onClick={()=>{SetCount(count-1)}} className="btn btn-danger m-2">Decrease</button>
    <button onClick={()=>{SetCount(0)}}  className="btn btn-info m-2">Reset</button>
    </div>
    </>
  );
}

export default Counter;
