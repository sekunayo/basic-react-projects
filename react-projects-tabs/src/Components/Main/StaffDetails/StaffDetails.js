import React from 'react';
import '../StaffDetails/staffDetails.css';

function StaffDetails(props){
    return(
            <div className="staff-info">
                <h3 className="title">{props.title}</h3>
                <button className="name">{props.name}</button>
                <p>{props.date}</p>
                <ul className="job-description">
                   {props.lists.map(element => <li><i className="fas fa-angle-double-right"></i><p>{element}</p></li>)} 
                </ul>
                <div className="more-info-container">
                    <button className="more-info">More info</button>
                </div>
            </div>
    )
}


export default StaffDetails;