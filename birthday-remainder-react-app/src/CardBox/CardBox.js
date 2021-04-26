import React from 'react';
import '../styles/cardBox.css';

function CardBox(props){
    return(
                <div className="card-box">
                    <div className="image-box">
                        <img src={props.image}></img>
                    </div>
                    <div className="text-box">
                        <h4 className="name">{props.name}</h4>
                        <p className="age">{props.age}</p>
                    </div>

                </div>
    )
}

export default CardBox;
       