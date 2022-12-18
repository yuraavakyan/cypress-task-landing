import React from 'react'
import './gallery.css'
import chair from '../../assets/chair.jpg'
import cornerTable from '../../assets/corner-table.jpg'
import sofa from '../../assets/sofa.jpg'
import lamp from '../../assets/lamp.jpg'
import corridor from '../../assets/corridor.jpg'


const Gallery = () => {
    return (
        <div className='grid-container'>
            <div className='grid-item'>
                <img src={chair} alt='chair' />
            </div>
            <div className='grid-item'>
                <img src={cornerTable} alt='chair' />
            </div>
            <div className='grid-item middle'>
                <img src={sofa} alt='chair' />
            </div>
            <div className='grid-item'>
                <img src={lamp} alt='chair' />
            </div>
            <div className='grid-item'>
                <img src={corridor} alt='chair' />
            </div>
        </div>
    )
}

export default Gallery