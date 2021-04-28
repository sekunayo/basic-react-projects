import './app.css';
import React,{useState} from 'react';
import Header from './Components/Header/Header.js';
import Form from './Components/Form/Form.js';
import Paragraph from './Components/Paragraph/Paragraph';
import paragraphData from '../src/data.js';

function App() {
  const [counter,setCounter] = useState(0);
  const [paragraph,setParagraph] = useState([]);
  const submitHandler = (e) => {
    e.preventDefault();
    if(counter <= 0){
      return paragraph;
    }
    if(counter >= (paragraphData.length - 1)){
      setParagraph(paragraphData.slice(0,paragraphData.length - 1));
    }
    setParagraph(paragraphData.slice(0,counter));

  }
  const changeHandler = (e) => {
    setCounter(Number(e.target.value));
  }
  return (
    <div className="app-container">
      <Header/>
      <Form submit={submitHandler} change={changeHandler} value={counter}/>
      <div className="paragraph-container">
     {paragraph.map((element,index)=><Paragraph key={index}>{element}</Paragraph>)}
     </div>
    </div>
  );
}

export default App;
