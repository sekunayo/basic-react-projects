import React, {useState} from 'react';
import '../src/styles/app.css'
import {data} from '../src/data.js';
import CardBox from './CardBox/CardBox.js';

function App(){
    const [user,setUser] = useState(data);
    const onClick = () => {
       return setUser([]);
    }
    return(
  <div className="app">
        <div className="app-card">
              <div className="card">
             <h3>{user.length} Birthdays today</h3>
             <div className="main-card">
{
                 user.map(element=>{
                     return <CardBox name={element.name} age={element.age} key={element.id} image={element.img}/>

                 })
             }
             </div>
             
             <button className="button" onClick= {onClick}>Clear All</button>
              </div>
        </div>
    </div>
    )
}    
 
export default App;