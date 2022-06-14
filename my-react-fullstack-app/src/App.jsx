import "./App.scss";
import Nav from "./components/Nav/Nav";
import Home from  "./containers/Home/Home";
import React from "react";

const App = () => {
  return (
    <div className="app">
     
    <div><Nav></Nav></div>
    
    <div><Home></Home></div> 
    </div>
  );
};

export default App;
