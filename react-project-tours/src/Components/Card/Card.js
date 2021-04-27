import React,{useState} from 'react';
import '../Card/card.css';
 
function Card(props){
        const [showText,setText] = useState(false);
        const [changeText,setChangeText] = useState(false);

    const readMore = () => {
        setText(!showText);
        setChangeText(!changeText);
    }
    return(
          <div className="card">
            <div className="image-box">
                <img src= {props.image} alt=""></img>
            </div>
            <div className="card-footer">
                <div className="text-box">
                    <h4 className="title">{props.title}</h4>
                    <button className="price">{props.price}</button>
                </div>
                <p className="paragraph">{props.paragraph}<span className="sub-paragraph">{showText ? props.subParagraph : null}</span><button className="read-more" onClick={readMore}>{changeText ? 'Show Less' : '...Read More'} </button></p>
                <div className="delete-box">
                <button className="delete" onClick={props.click}>Not interested</button>
                </div>
            </div>

        </div>
    )
}

export default Card;