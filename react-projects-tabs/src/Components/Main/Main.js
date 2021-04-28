import React,{useState} from 'react';
import '../Main/main.css';
import Nav from './Nav/Nav.js';
import StaffDetails from './StaffDetails/StaffDetails.js';
import tabData from '../../data.js';

function Main(){
    const category = tabData.map(element=> element.name);
    const [info,setInfo] = useState(tabData[0]);
    const filter = (unique) => {
       const newInfo = tabData.filter(element=>element.name === unique);
       setInfo(newInfo[0]);
    }
    return(
            <div className="main-container">
              <Nav categories={category} categoryEvent={filter}/>
              <StaffDetails title = {info.job} name={info.name} lists={info.paragraph} date={info.date}/>
            </div>
    )
}


export default Main;