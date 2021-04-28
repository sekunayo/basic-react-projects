import './app.css';
import React,{useEffect, useState} from 'react';
import Header from '../src/Components/Header/Header.js';
import Nav from '../src/Components/Nav/Nav.js';
import Menu from  '../src/Components/Menu/Menu.js';
import menuData from '../src/data.js';
const lists = ['all', ...new Set(menuData.map((element) => element.type))];

function App() {
  const [category] = useState(lists);
  const [allItems,setAllItems] = useState(menuData);
  const [breakfast,setBreakfast] = useState(null);
  const [lunch,setLunch] = useState(null);
  const [shakes,setShakes] = useState(null);

  useEffect(()=>{
  const breakfastCategory = allItems.filter((element) => element.type === 'breakfast');
  const lunchCategory = allItems.filter((element) => element.type === 'lunch');
  const shakesCategory = allItems.filter((element) => element.type === 'shakes');
  setBreakfast(breakfastCategory);
  setLunch(lunchCategory);
  setShakes(shakesCategory);

  },[])
  const filter = (category) => {
      if(category === 'all'){
         setAllItems(menuData);
      }
          else if(category === 'breakfast'){
           setAllItems(breakfast);
          }
          else if(category === 'lunch'){
          setAllItems(lunch);
          }
          else{
           setAllItems(shakes);
          }
  }
  return (
    <div className="app-container">
    <Header/>
    <Nav categories={category} filterCategories = {filter}/>
      {/* {
        allItems.map(element => <Menu title={element.title} key={element.id} image={element.image} paragraph={element.paragraph}/>)
      } */}
      <Menu allProperties={allItems}/>
    </div>
  );
}

export default App;
