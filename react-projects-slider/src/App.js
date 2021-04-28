import './app.css';
import React,{useState,useEffect} from 'react';
import Header from '../src/Components/Header/Header.js';
import Slide from '../src/Components/Slide/Slide.js';
import slideData from '../src/data.js';

function App() {
  const [slide,setSlide] = useState(0);
  const correctSlide = slideData[slide];
  const checkIndex = (index) => {
    if(index > slideData.length - 1){
      return 0;
    }
    else if(index < 0){
      return slideData.length - 1;
    }
    return index;
  }
  const clickRight = () => {
    setSlide((slide)=>{
         let newIndex = slide + 1;
         return checkIndex(newIndex);
    })
  }

  const clickLeft = () => {
    setSlide((slide)=>{
         let newIndex = slide - 1;
         return checkIndex(newIndex);
    })
  }
let position = 'next-slide';
  useEffect(() => {
  const timer = setTimeout(() => {
    setSlide((slide)=>{
         let newIndex = slide + 1;
         return checkIndex(newIndex);
    })
if(slide === slideData.indexOf(correctSlide)){
  position = 'active-slide';
}
  }, 2000);
  return timer;
},[slide]); 
 

  return (
    <div className="app-container">
    <Header/>
    <Slide image={correctSlide.image} class="review-card" left={clickLeft} name={correctSlide.name} title={correctSlide.title} paragraph={correctSlide.paragraph} right={clickRight}/>
    </div>
  );
}

export default App;
