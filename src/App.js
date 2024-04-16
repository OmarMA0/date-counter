import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
     <Counter/>
      
      
    </div>
  );
}
function Counter ( ) {
  const [counter , setCounter] = useState(0) ;
  const [step , setStep] = useState(0) ;
  const d = new Date("2027-6-21");

  d.setDate(d.getDate() + counter) ;
  function stepupper() {
    setStep((s)=> s+1) ;
  }
  function steplower(){
    setStep((s)=> s-1) ;
  }
  
  function Counterupper(step) {
    setCounter((s)=> s+step) ;
  }
  function Counterlower(step) {
    setCounter((s)=> s-step) ;
  }
  
  return (
  <div>
    <button className="Button" onClick={()=>Counterlower(step)}> - </button>
    counter : {counter}
    <button className="Button" onClick={()=>Counterupper(step)}> + </button>
    <div>
    <button className="Button" onClick={()=>steplower()}> - </button>
    step : {step}
    <button className="Button" onClick={()=>stepupper()}> + </button>
    </div>    
    {counter != 0 && Math.abs(counter)}  {counter != 0 && "days"}  {counter > 0 && 'from today'} {counter == 0 && 'today is'} {counter < 0 && 'ago is'} {d.toDateString()}

  </div>
  );
}

