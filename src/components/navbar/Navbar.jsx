import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import Button from '../common/button/Button'

const navLinks = [
    { title: 'Home', to: '/home' },
    { title: 'About us', to: '/about' },
    { title: 'Services', to: '/services' },
    { title: 'Our teams', to: '/teams' },
]

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('Home')
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenuOpen = () => {
        setMenuOpen((prev) => !prev)
    }

    const handleClickLink = (link) => {
        setActiveLink(link)
    }
    return (
        <div className='navbar-container'>
            <div className='navbar-content'>
                <div className='logo'>
                    <img src={logo} alt='dananz' />
                </div>
                <nav className='navbar'>
                    <ul className='navlinks'>
                        {navLinks.map(link => (
                            <li
                                className={
                                    `navlink ${activeLink === link.title ? 'active' : ''}`
                                }
                                key={link.title}
                                onClick={() => handleClickLink(link.title)}
                            >
                                {link.title}
                            </li>
                        ))}
                        <Button text={'Contact Us'} onClick={() => console.log('clicked')} type={'primary'} />
                    </ul>
                </nav>
                <div className={`burger${menuOpen ? ' open' : ''}`} onClick={toggleMenuOpen}>
                    <div className='line line-1'></div>
                    <div className='line line-2'></div>
                    <div className='line line-3'></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar