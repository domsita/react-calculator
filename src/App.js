import './App.css';
import { useState } from 'react';

function App() {
  let [display, setDisplay] = useState('');
  let [result, setResult] = useState('');

  const evaluateEquation = () => {
    let ans = eval(display);
    setDisplay('');
    setResult(ans);
  }

  return (
    <div className="App">
      <div className="display-container">
        <p className="display">{display}</p>
        <p className="result">{result}</p>
      </div>
      <div className="row">
        <button onClick={() => {setDisplay(display + '1')}}>1</button>
        <button onClick={() => {setDisplay(display + '2')}}>2</button>
        <button onClick={() => {setDisplay(display + '3')}}>3</button>
        <button onClick={() => {setDisplay(''); setResult('')}}>C</button>
      </div>
      <div className="row">
        <button onClick={() => {setDisplay(display + '4')}}>4</button>
        <button onClick={() => {setDisplay(display + '5')}}>5</button>
        <button onClick={() => {setDisplay(display + '6')}}>6</button>
        <button onClick={() => {setDisplay(display + '+')}}>+</button>
      </div>
      <div className="row">
        <button onClick={() => {setDisplay(display + '7')}}>7</button>
        <button onClick={() => {setDisplay(display + '8')}}>8</button>
        <button onClick={() => {setDisplay(display + '9')}}>9</button>
        <button onClick={() => {setDisplay(display + '-')}}>-</button>
      </div>
      <div className="row">
        <button onClick={() => {setDisplay(display + '0')}}>0</button>
        <button onClick={() => {setDisplay(display + '*')}}>*</button>
        <button onClick={() => {setDisplay(display + '/')}}>/</button>
        <button onClick={evaluateEquation}>=</button>
      </div>
    </div>
  );
}

export default App;
