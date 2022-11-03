import { useState } from 'react';
import './index.css';

function App() {
  const [getValue, setGetValue] = useState('')
  const [result, setResult] = useState('')
  const getValueHandler = (e) => {
    setGetValue(getValue.concat(e.target.value))

  }
  const minusOneHandler = () => {
    let newValue = getValue.slice(0, getValue.length - 1);
    setGetValue(newValue)
  }

  const resultHandler = () => {
    setResult(eval(getValue))
  }

  const emptyHandler = () => {
    setGetValue('');
    setResult('')
  }

  return (
    <div className="container">
      <div className="res">
        <input type="text" disabled id="res" value={getValue} placeholder="0" />

      </div>
      <div className="output">
        <input type="text" disabled id="output" value={result} />
      </div>
      <div className="calcbutton">
        <button value="Ac" onClick={emptyHandler}>Ac</button>
        <button value="X" onClick={minusOneHandler}>&#x2190;</button>
        <button value="%" onClick={getValueHandler}>%</button>
        <button value="/" onClick={getValueHandler}>&divide;</button>
      </div>
      <div className="calcbutton">
        <button value="7" onClick={getValueHandler}>7</button>
        <button value="8" onClick={getValueHandler} >8</button>
        <button value="9" onClick={getValueHandler} >9</button>
        <button value="*" onClick={getValueHandler} >&times;</button>
      </div>
      <div className="calcbutton">
        <button value="4" onClick={getValueHandler}>4</button>
        <button value="5" onClick={getValueHandler}>5</button>
        <button value="6" onClick={getValueHandler}>6</button>
        <button value="-" onClick={getValueHandler}>-</button>
      </div>
      <div className="calcbutton">
        <button value="1" onClick={getValueHandler}>1</button>
        <button value="2" onClick={getValueHandler}>2</button>
        <button value="3" onClick={getValueHandler}>3</button>
        <button value="+" onClick={getValueHandler}>+</button>
      </div>
      <div className="calcbutton">
        <button value="0" className="btn-a" onClick={getValueHandler}>0</button>
        <button value="." className="btn-b" onClick={getValueHandler}>.</button>
        <button value="=" className="btn-c" onClick={resultHandler}>=</button>
      </div>

    </div>
  );
}

export default App;
