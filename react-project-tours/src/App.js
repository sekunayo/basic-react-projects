import React,{useState,useEffect} from 'react';
import Setup from './Components/Setup/Setup.js';
import Loading from '../src/Components/Loading/Loading.js';

function App() {
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, []);
  return loading === false ? <Setup/> : <Loading/>
}

export default App;
