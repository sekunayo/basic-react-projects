import React, { useState } from 'react';
import '../Color/color.css';

function Color(props){
    const [text,setText] = useState(false);
    const onClickHandler = () => {
        setText(true);
      navigator.clipboard.writeText(`#${props.color}`);
    }
    return(
  <div className={`box`} onClick = {onClickHandler} style={{backgroundColor: `#${props.color}`}}>
            <p className={`percent-value ${props.colorClass}`}>{props.percent}%</p>
            <p className={`color-value ${props.colorClass}`}>#{props.hex}</p>
            {text && <p className="alert">Copied to clipboard</p>}
   </div>
    )
}

export default Color;