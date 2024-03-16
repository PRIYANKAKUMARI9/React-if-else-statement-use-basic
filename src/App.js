
import { useState } from 'react';
import './App.css';


function App() {
//useState uses
//if else statement in conditional oprator
 let[count,setcount]=useState(1)
 let tamplate='';
 let[pshow,setpshow]=useState(false)
  
  let display=()=>{
    setcount(count+1)
  }

  if(pshow){
   tamplate=<>
   <button className='bg-[red] p-4' onClick={()=>setpshow(!pshow)}>show</button>
   <p>welcom vivek</p>
   </>
  }
  else{
   tamplate=<button className='bg-[blue] p-4' onClick={()=>setpshow(!pshow)}>hide</button>;
  }

 
  
  return (
    <div className="App">
      <h1 className='mt-8'>increment buttons</h1>
      <button className='bg-[red] p-[10px] mr-6' onClick={display}>Encrement click!!</button>
      {count} 
      <p className='mt-9'>welcome to priyanka blog</p>
      {tamplate}
      
    </div>
  );
}

export default App;
