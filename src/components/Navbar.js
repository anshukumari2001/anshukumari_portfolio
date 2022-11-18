import React, {useState} from 'react'
import './NavbarStyle.css'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
    const[click, setClick]= useState(false);
    const clickHandler =() =>{
        setClick(!click);
    }
  return (
    <div className='header'>
        <Link to="/">
            <h2>Portfolio</h2>
        </Link>

        <ul className={click ? 'nav-menu active' : 'nav-menu'}> 
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li>
            <li>
                <Link to="/experience">Experience</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/contact">Contact</Link> 
            </li>
        </ul>
        <div className='hamburger' onClick={clickHandler}>
            {
                click ? <FaTimes size={20} style={{color: "white"}}/> :
                <FaBars size={20} style={{color: "white"}}/>
            }
            
        </div>
      
    </div>
  )
}

export default Navbar
