import React, {useState } from 'react';
import Header from '../Header/Header.js';
import Card from '../Card/Card.js';
import '../Setup/setup.css';
import tourData from '../../data.js';

function Setup(){
    const [data,setData] = useState(tourData);


    const handleClick = (id) => {
    let newData = data.filter(element => element.id !== id)
    setData(newData)
    }
      
    return(
 <div className="setup-container">
    <Header/>
    <div className="card-container">
    {
       data.map((element) => {
           return <Card image={element.image} click={() => handleClick(element.id)} key={element.id} subParagraph={element.sub} title={element.heading} price={element.price} paragraph={element.paragraph}/>
       }) 
    }
    </div>
    </div>
    )
   
   

}

export default Setup;