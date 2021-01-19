import React, {useState}  from "react"
import './App.css';

function App() {

  let[color, setColor] = useState(null);

 let redextraclase = "";
  if(color === "rojo") redextraclase = "selected";
  let yellowextraclase = "";
  if(color === "amarillo") yellowextraclase = "selected";
  let greenextraclase = ""; 
  if(color === "verde") greenextraclase = "selected";
  
  return  (

    <div className="traffic-light">
      <input type="radio" id="rojo" name="rojo" className={redextraclase} onClick={() => setColor('rojo')} />    
      <input type="radio" id="amarillo" name="amarillo" className={yellowextraclase}  onClick={() => setColor('amarillo')} />
      <input type="radio" id="verde" name="verde" className={greenextraclase} onClick={() => setColor('verde')} />  
    </div>
  )

};

export default App;
