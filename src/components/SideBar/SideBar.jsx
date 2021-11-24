import React from 'react';
import "./SideBar.css"

const SideBar = (props) => {
    console.log(props)
    return (
        <div 
        style={{"backgroundColor":
          props.place === "left" ? 'pink' : 'rgba(31, 6, 25, 0.561)'
        }} 
        className="sidebar"
        >SideBar</div>
    );
};

export default SideBar;