import React ,{useContext}from 'react'
import Task from './Tasks'
import themeContext from './MyContext'
const myStyle = {
  color: 'white',
  backgroundColor: 'black',
};


export default function WorkArea() {
  const {themeValue} = useContext(themeContext);

  function displaySidebar() {
    const sideBar = document.getElementById("sideBar");
    const disableself = document.getElementById("menu_content");
    disableself.style.display = "none";
    sideBar.style.display = "block";
    sideBar.style.position = "absolute";
    sideBar.style.height = "100vh";
    sideBar.style.left = "0";
    // sideBar.style.top = "23%";
    sideBar.style.width = "20%";
  }

  return (
    <div className='mainarea'>
      <h1 onClick={displaySidebar}style={themeValue === 'dark' ? myStyle : {}}id="menu_content"><i className="bi bi-list"></i></h1>
      <Task/>
    </div>
  )
}
