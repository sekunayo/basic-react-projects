import React from 'react';
import '../Paragraph/paragraph.css'

function Paragraph(props){
   return(
        <p>{props.children}</p>
   )
}

export default Paragraph;