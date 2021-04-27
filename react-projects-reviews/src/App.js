import './app.css';
import Header from '../src/Components/Header/Header.js';
import Card from '../src/Components/Card/Card.js';
import React, {useState} from 'react';
import personData from '../src/data.js';

function App() {
  const [person,setPerson] = useState(0);
  const people = personData[person];
  const correctNumber  = (num) => {
      if(num > personData.length  - 1){
        return 0;
      }
     if(num < 0){
        return personData.length - 1;
      }
        return num;
  }
  const nextButton = (e) => {
     e.preventDefault();
      setPerson((person)=>{
        let newIndex = person + 1 ;
        return correctNumber(newIndex);
      });
  }
    const previousButton = (e) => {
     e.preventDefault();
      setPerson((person)=>{
        let newIndex = person - 1 ;
        return correctNumber(newIndex);
      });
    }
    const supriseButton = (e) => {
     e.preventDefault();
      setPerson((person)=>{
        let newIndex = Math.trunc(Math.random() * person);
        return correctNumber(newIndex);
      });
    }
  return (
    <div className="app-container">
      <Header/>
        <Card name={people.name} suprise={supriseButton} key={people.id} clickLeft = {previousButton} clickRight={nextButton} paragraph={people.paragraph} title={people.title} image={people.image}/>
   
    </div>
  );
}

export default App;
