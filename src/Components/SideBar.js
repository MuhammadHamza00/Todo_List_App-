import React ,{useContext} from 'react'
import profile from '../Assets/images/logo.png'
import themeContext from './MyContext'
import moduleName from '../Assets/images/abc.png'

export default function SideBar() {


  function hideSidebar() {
      const sideBar = document.getElementById("sideBar");
      const disableself = document.getElementById("menu_content");
      disableself.style.display = "block";
      sideBar.style.display = "none";
  }
  const myStyle = {
    color: 'white',
    backgroundColor: 'black',
  };

  const {themeValue} = useContext(themeContext);

  return (
    <div className='sidebar'id="sideBar"style={themeValue === 'dark' ? myStyle : {}}>
        <h1 className='sidebtnmenu'style={themeValue === 'dark' ? myStyle : {}}onClick={hideSidebar}><i className="bi bi-list"></i></h1>
       <div className="account"style={themeValue === 'dark' ? myStyle : {}}>
        <img src={moduleName} alt="" className='profile'/>
        <h4>Now or Never</h4>
        <p>Your Personalized Todo List</p>
      </div>
      <hr />
      <div className="Items">
        <div className="item"id="item1"><i class="bi bi-card-checklist"></i><p>List</p></div>
        {/* <div className="item"id="item1"><i class="bi bi-stopwatch"></i><p>Podomoro</p></div> */}
      </div>
    </div>
  )
}


