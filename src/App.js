import { useState } from "react";
function App() {

  let [count,setcount]=useState(0)

  function random(){
    let random=Math.floor(Math.random()*10)+1
    setcount(random)
  }
  function incrementNUm(){

    setcount(count=count+1)
  }
  function decreamentNum(){
    setcount(count=count-1)
  }
  function reset(){
    setcount(0)
  }

  return (
    <div className="bg-slate-400 p-10 ">
      <div className="bg-orange-200 p-5">

      <h1 className="text-center text-3xl font-bold">Random Number Generator={count}</h1>
      
      <div className="text-center text-2xl my-4 gap-3">
      <button className="text-blue-600 text-2xl font-bold" onClick={incrementNUm}>+ Incre   |</button>
      <button className="text-green-500 text-2xl font-bold" onClick={random}>RandomGenerate</button>
      
      <button className="text-red-600 text-2xl font-bold" onClick={decreamentNum}>|    - Decre</button><br></br>
      <button className="text-white text-2xl font-bold" onClick={reset}>Reset</button>

      </div>
      
     


      </div>
     
   
    </div>
  );
}

export default App;
