import React, { useContext,useState } from 'react'
import Logo from '../Assets/images/logo.png'
import themeContext from './MyContext'

export default function Header() {

    const myStyle = {
        color: 'white',
        backgroundColor: 'black',
    };

    const {themeValue,setThemeValue} = useContext(themeContext);
    return (
        <header id='head_head' style={themeValue === 'dark' ? myStyle : {}}>
            <img src={Logo} alt="" />
            <div className="searchContain"><i class="bi bi-search"></i><input type="search" name="search" id="search" placeholder='Type Something Here!' /></div>
            <i class="bi bi-brightness-high" onClick={() => {
                setThemeValue(themeValue === 'dark' ? 'light' : 'dark');
            }}></i>

        </header>
    )
}
