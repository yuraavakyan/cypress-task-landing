import React from 'react'
import heroPic from '../../assets/hero-pic.jpg'
import './heroSection.css'

const HeroSection = () => {
    return (
        <div className='section-container'>
            <div className='section-content'>
                <h1 className='section-header'>Minimalist Room</h1>
                <div className='section-description'>
                    It is a long established fact that a reader
                    will be distracted by the readable content of
                    a page when looking at its layout.
                </div>
                <div className='hero-cover-pic'>
                    <img src={heroPic} alt='sofa' />
                </div>
                <div className='articles'>
                    <div className='article'>
                        <div className='article-heading'>
                            Project Overview
                        </div>
                        <div className='article-text'>
                            <div className='mainText'>
                                Online learning with us does not interfere
                                with your daily life. because learning can
                                be done anytime and anywhere. Online learning
                                with us does not interfere with your daily life.
                                because learning can be done anytime and anywhere.
                                Online learning with us does not interfere with your
                                daily life. because learning can be done anytime and
                                anywhere.
                            </div>
                            <div className='article-footer'>
                                <span className='date'>July 22 - 2022</span>
                                <span>Interior Design - Furnitur</span>
                            </div>
                        </div>
                    </div>
                    <div className='article'>
                        <div className='article-heading'>
                            Design Process
                        </div>
                        <div className='article-text'>
                            <div className='mainText'>
                                Online learning with us does not interfere
                                with your daily life. because learning can
                                be done anytime and anywhere. Online learning
                                with us does not interfere with your daily life.
                                because learning can be done anytime and anywhere.
                            </div>
                            <div className='mainText'>
                                Online learning with us does not interfere
                                with your daily life. because learning can
                                be done anytime and anywhere. Online learning
                                with us does not interfere with your daily life.
                                because learning can be done anytime and anywhere.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection