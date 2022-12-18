import React, { useState } from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
import send from '../../assets/icons/send.svg'
import fb from '../../assets/icons/fb.svg'
import insta from '../../assets/icons/insta.svg'
import tiktok from '../../assets/icons/tiktok.svg'
import youtube from '../../assets/icons/youtube.svg'


const socialLinks = [
    { icon: fb, href: 'https://facebook.com' },
    { icon: insta, href: 'https://instagram.com' },
    { icon: tiktok, href: 'https://tiktok.com' },
    { icon: youtube, href: 'https://youtube.com' },
]

const Footer = () => {
    const [inputValue, setInputValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(inputValue)
        setInputValue('')
    }

    return (
        <footer className='footer-container'>
            <div className='footer-content'>
                <div className='footer-heading-part'>
                    <div className='logo'><img src={logo} alt='dananz' /></div>
                    <div className='footer-heading'>
                        One of the best furniture agency.
                    </div>
                </div>
                <div className='email-part'>
                    <div className='email-header'>
                        <span className='dot'></span>
                        <div className='email-header-text'>
                            Enter  your email to get the laterst news
                        </div>
                    </div>
                    <form
                        className='email-input'
                        onSubmit={handleSubmit}
                    >
                        <input
                            type={'email'}
                            className='input'
                            placeholder='Email Address'
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button
                            type='submit'
                            className='send-btn'
                        >
                            <img src={send} alt='send' />
                        </button>
                    </form>
                    <div className='social'>
                        <div className='social-header'>Follow us on: </div>
                        <div className='social-links'>
                            {
                                socialLinks.map(link => (
                                    <div key={link.href} className='social-icon'>
                                        <a href={link.href}>
                                            <img src={link.icon} alt={link.href} />
                                        </a>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer