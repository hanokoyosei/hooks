import React from 'react';
import Counter from './components/Counter/Counter';
import SideBar from './components/SideBar/SideBar';
import UserGreet from './components/UserGreet/UserGreet';
import "./App.css"
const App = () => {
  return (

      //<Counter /> 
      //<UserGreet />
    //<div className="sidebars">
    <div style={{display: "flex", justifyContent: "space-between"}}>
      <SideBar place="left"/>
      <SideBar place="right"/>
    </div>
    );
};

export default App;
