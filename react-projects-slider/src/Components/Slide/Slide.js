import React from 'react';
import '../Slide/slide.css';

function Slide(props){
    return(
        <div className="review-container">
            <div className="left-arrow-container">
            <div className="left-arrow" onClick={props.left}>
                <i className="fas fa-chevron-left"></i>
            </div>
            </div>
            <div className={props.class}>
                <div className="image-container">
                    <div className="image-box">
                        <img src={props.image} alt=""></img>
                    </div>
                </div>

                <h4 className="name">{props.name}</h4>
                <p className="work-title">{props.title}</p>
                <p className="about-paragraph">
                   {props.paragraph}
                </p>

                <div className="quote-icon">
                    <i className="fas fa-quote-right"></i>
                </div>
            </div>
            <div className="right-arrow-container">
            <div className="right-arrow" onClick={props.right}>
                <i className="fas fa-chevron-right"></i>
            </div>
            </div>
        </div>
            )
}

export default Slide;