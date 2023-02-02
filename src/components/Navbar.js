import React from 'react'
import { useRef } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

  return (
    <header>
        <h3>Logo</h3>
        <nav ref={ navRef }>
            <Link to="/">Home</Link>
            <Link to="about">About Us</Link>
            <Link to='register'>Services and Complaints</Link>
            <a href='contact'>Contact Us</a>
            <button className='nav-btn nav-close-btn' onClick={ showNavbar }>
                <FaTimes />
            </button>
        </nav>
        <button className='nav-btn' onClick={ showNavbar }>
            <FaBars />
        </button>
    </header>
  )
}

export default Navbar