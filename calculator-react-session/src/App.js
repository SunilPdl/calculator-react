import React, { useState, useEffect, useRef } from 'react';

import './App.css';

function App() {
  const [ result, setResult] = useState("");
  const resultRef = useRef(null); //for reference
  useEffect( () => resultRef.current.focus()); // for focus when rendering
  const KeypadClick = (e) =>{
    setResult( result + e.target.name);  /* e = event */
    
  }

  return (
    <>
    <div className="container">
      <form className = "resultDisplay" >
        <input type = "text" id="input" value = {result} ref={resultRef} />
      </form>
      <div className="keypad">     
        <button name="7" onClick={KeypadClick} >7</button>
        <button name="8" onClick={KeypadClick} >8</button>
        <button name="9" onClick={KeypadClick} >9</button>
        <button onClick={KeypadClick} >C</button>

        <button name="4" onClick={KeypadClick} >4</button>
        <button name="5" onClick={KeypadClick} >5</button>
        <button name="6" onClick={KeypadClick} >6</button>
        <button id = "backSpace" onClick={KeypadClick} >D</button>

        <button name="1" onClick={KeypadClick} >1</button>
        <button name="2" onClick={KeypadClick} >2</button>
        <button name="3" onClick={KeypadClick} >3</button>
        <button name="*" onClick={KeypadClick} >&times;</button> {/* &times; --> for 'x  symbol*/}

        <button name="0" onClick={KeypadClick} >0</button>
        <button name="+" onClick={KeypadClick} >+</button>
        <button name="-" onClick={KeypadClick} >-</button>
        <button name="/" onClick={KeypadClick} >/</button>

        <button name="." onClick={KeypadClick} >.</button>
        <button name="%" onClick={KeypadClick} >%</button>
        <button id="result" onClick={KeypadClick} >=</button>
      </div>
    </div>
    


    </>
  );
}

export default App;
