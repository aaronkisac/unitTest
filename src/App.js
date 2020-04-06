import React from "react";
import Double from "./components/Double";
import Footer from './components/Footer'
import "./App.css";

function App() {
  return (
    <div >
      <Double initialNum= {15} />
      <Footer/>
    </div>
  );
}

export default App;
