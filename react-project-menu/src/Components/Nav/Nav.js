import React from 'react';
import '../Nav/nav.css';
// import Menu from '../Menu/Menu.js'
// import menuData from '../../data.js';

function Nav(props){
// const [breakfast] = useState(menuData.breakfast);
//   const [lunch] = useState(menuData.lunch);
//   const [shakes] = useState(menuData.shakes);
//   const [showBreakfast,setShowBreakfast] = useState(false)
//   const breakfastClickHandler = () => {
//       breakfast.map(element => <Menu image={element.image} title={element.title} paragraph={element.paragraph} key={element.id}/>);
//       console.log(breakfast);
//   }
//    const lunchClickHandler = () => {
//      lunch.map(element => <Menu image={element.image} title={element.title} paragraph={element.paragraph} key={element.id}/>);
//   }
//    const shakesClickHandler = () => {
//      shakes.map(element => <Menu image={element.image} title={element.title} paragraph={element.paragraph} key={element.id}/>);

 return(
      <nav>
            {props.categories.map((element,index) => <button className="nav-item" onClick={() => props.filterCategories(element)} key={index}>{element}</button>)}
        </nav>
 );
}

export default Nav;