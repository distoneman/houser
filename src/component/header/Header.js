import React from 'react'
import logo from './../../images/houser_logo.png'
// import './../../style.css'
import './header.css'

export default function Header(){
    return(
        <div className='header'>
            <img src={logo}  alt='logo' className='logo'/>
            Houser
        </div>
    )
}