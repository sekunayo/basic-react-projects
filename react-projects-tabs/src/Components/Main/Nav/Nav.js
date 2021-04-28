import React from 'react';
import'./nav.css';

function Nav (props){
    return(
              <nav>
                <ul className="list-nav">
                   {props.categories.map((element,index)=> <li key={index}><button className="nav-button"  onClick = {() => props.categoryEvent(element)}>{element}</button></li>)}

                </ul>
            </nav>
    )
}

export default Nav;