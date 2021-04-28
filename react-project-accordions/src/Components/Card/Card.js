import React,{useState} from 'react';
import './card.css';
// import questionData from '../../data.js';

function Card(props){
    const [showText,setShowText] = useState(false);
    const handleClick = () => {
        setShowText(!showText);
  
    }
 return(
     <div className="card-box">
<div className="card">
                <h4 className="">{props.questionInfo}</h4>
                <div className="icon-circle"onClick={handleClick}><i className= {showText ? "fas fa-minus": "fas fa-plus"}></i></div>
            </div>
           <p>{showText ? props.answer : null}</p>
     </div>



 )
}

export default Card;