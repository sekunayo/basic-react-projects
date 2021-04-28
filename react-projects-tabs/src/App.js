import './app.css';
import React from 'react';
import Header from '../src/Components/Header/Header.js';
import Main from '../src/Components/Main/Main.js';

function App() {
  return (
    <div className="app-container">
         <Header/>
         <Main/>
    </div>
  );
}

export default App;
