import './App.css';
import { useState, state, startTransition } from 'react';

function App() {
  const [ gil, setGil ] = useState({
    startingGil: "",
    endingGil: "",
    splitPerc: "15"
  })

  const handleKeyPress = (keyPress) => {
    const allowedKeys = [
    "Backspace",
    "Delete",
    "ArrowLeft",
    "ArrowRight",
    "Tab",
    ",",
    "%"
  ]
    if (!/[0-9]/.test(keyPress.key) && !allowedKeys.includes(keyPress.key)) keyPress.preventDefault()
  }

  const handleChange = (gilAmount,gilType) => {
    const numericValue = gilAmount.replace(/[^\d]/g, "")

  setGil(prev => ({
    ...prev,
    [gilType]: numericValue,
  }))
}

  return (
    <div className='Page'>
      <header>
      <h1>Leve Calc!</h1>
      </header>
      <div>
        <form>
          <label>Starting Gil</label>
          <input onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => handleChange(e.target.value, "startingGil")} />
          <label>Ending Gil</label>
          <input onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => handleChange(e.target.value, "endingGil")} />
          <label >Split</label>
          <input defaultValue={"15%"} onKeyDown={(e) => handleKeyPress(e)} onChange={(e) => handleChange(e.target.value, "splitPerc")} />
        </form>
        <p>Total Revenue: {(Number(gil.endingGil) - Number(gil.startingGil)).toLocaleString()}</p>
        <p>Split: {((Number(gil.endingGil) - Number(gil.startingGil)) * ((100 - gil.splitPerc) / 100)).toLocaleString()}</p>
        <p>Keep: {((Number(gil.endingGil) - Number(gil.startingGil)) * (gil.splitPerc / 100)).toLocaleString()}</p>
      </div>
    </div>
  );
}


export default App;
