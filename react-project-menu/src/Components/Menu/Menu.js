import React from 'react';
import '../Menu/menu.css';

function Menu(props){

 return(
    <div className="menu-container">
     {props.allProperties.map((element)=>
            <div className="menu-card" key={element.id}>
                <div className="image-box">
                    <img src={element.image} alt=""></img>
                </div>
                <div className="text-box">
                    <div className="title-box">
                        <h4 className="title">{element.title}</h4>
                        <h4 className="price">$15</h4>
                    </div>
                    <p className="paragraph">{element.paragraph}</p>
                </div>
            </div>
     )}
    </div>

 );
}

export default Menu;