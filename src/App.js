import React, {useEffect} from "react";
import "./App.css";
import axios from 'axios';
import APOD from './components/APOD';

function App() {
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => console.log(res))
      .catch(err => {console.group(err)});
  }, [])

  return (
    <div className="App">
      <APOD />
    </div>
  );
}

export default App;
