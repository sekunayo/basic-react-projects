import './app.css';
import React,{useState} from 'react';
import Header from '../src/Components/Header/Header.js';
import Color from '../src/Components/Color/Color.js';
import Values from 'values.js';

function App() {
  const [color,setColor] = useState('');
  const [colorArray,setColorArray] = useState(new Values('#f15025').all(10));
  const submitHandler = (e) => {
    e.preventDefault();
    if(color.includes('#')){
      setColorArray(new Values(color).all(10));
    }
    if(!(color.includes('#'))){
    setColorArray(new Values(`#${color}`).all(10));
    }
  }
  const changeHandler = (e) => {
    setColor(e.target.value);
  }

  return (
    <div className="app-container">
      <Header value={color} change={changeHandler} submit={submitHandler}/>
      <div className="color-container">
        {colorArray.map((element,index) => <Color key ={index} percent={element.weight} colorClass={index > 10 ? 'white' : 'black'} hex = {element.hex}color={element.hex}/>)}
      </div>
    </div>
  );
}

export default App;
