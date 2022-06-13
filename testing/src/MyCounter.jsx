import React,{useState} from 'react'

const MyCounter = () => {
    const [inp,setInp] = useState(0);
    const [min,SetMin]=useState(0);
    const [sec,SetSec] = useState(0);
    const handleEnter = () =>{
        if(min<61 && sec < 61){
            setTimeout(() => {
                SetSec(sec-1);
            }, 1000);
        }
        else{
            alert("wrong input")
        }
    }
     const handleChangeMin = (e) =>{
        SetMin(e.target.value);
       
     }
     const handleChangeSec = (e) =>{

        SetSec(e.target.value);
     }

  return (

    <>
    <div>
    <h1>
        {min} : {sec}
    </h1>
    <input type="number" value= {min} onChange={(e)=>handleChangeMin(e)} />
    <input type="number" value= {sec} onChange={(e)=>handleChangeSec(e)} />
    <button className='btn btn-success btn-sm' onClick={handleEnter}>Enter</button>
    </div>
    </>
  )
}

export default MyCounter