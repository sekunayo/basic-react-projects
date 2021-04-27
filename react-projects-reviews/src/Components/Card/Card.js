import React from 'react';
import '../Card/card.css';

function Card (props){
    return(
   <div className="review-container">
            <div className="review-card">
                <div className="image-container">
                    <div className="image-box">
                        <div className="quote-icon">
                            <i className="fas fa-quote-right"></i>
                        </div>
                        <div className="absolute-image-box"></div>
                        <img src={props.image} alt=""></img>
                    </div>
                </div>

                <h4 className="name">{props.name}</h4>
                <p className="work-title">{props.title} </p>
                <p className="about-paragraph">
                  {props.paragraph}
                </p>
                <div className="arrows">
                    <div className="left-arrow">
                        <i className="fas fa-chevron-left" onClick={props.clickLeft} ></i>
                    </div>
                    <div className="right-arrow">
                        <i className="fas fa-chevron-right" onClick={props.clickRight}></i>
                    </div>

                </div>
                <div className="button-container"><button onClick={props.suprise}>Suprise Me</button></div>
            </div>
        </div>
    )
}
export default Card;
