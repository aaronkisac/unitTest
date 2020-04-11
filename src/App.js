import React from "react";
import Double from "./components/Double";
import Footer from './components/Footer'
import WeatherShow from './components/WeatherShow'
import {calculateDouble} from './components/calculateDouble';
import "./App.css";
import {weather} from './services/functions';


function App() {
  return (
    <div >
      <WeatherShow weather={weather}/>
      <Double initialNum= {15} calculateDouble={calculateDouble} />
      <Footer/>
    </div>
  );
}

export default App;
