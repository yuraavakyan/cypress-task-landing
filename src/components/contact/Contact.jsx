import React from 'react'
import Button from '../common/button/Button'
import './contact.css'

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-content'>
                <div className='contact-heading'>
                    let's discuss making your interior like a dream place!
                </div>
                <div className='contact-action-section'>
                    <div className='contact-action-text'>
                        Contact us below to work together to build your amazing interior
                    </div>
                    <Button text={'Contact Us'} onClick={() => console.log('clicked')} type={'secondary'} />
                </div>
            </div>
        </div>
    )
}

export default Contact