import './app.css';
import Header from './Components/Header/Header.js';
import Card from './Components/Card/Card.js';
import questionData from './data.js';
import React,{useState} from 'react';


function App() {
 
  const  [question] = useState(questionData);
 
  return (
    <div className="app">
      <Header/>
      <div className="card-container">

      {
      question.map((element)=> {
return   <Card key={element.id} answer={element.answer}questionInfo={element.question}/>
      })
      }
     </div>
     </div>
   
  );
}

export default App;
