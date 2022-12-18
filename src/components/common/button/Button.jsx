import React from 'react'
import './button.css'

const Button = ({ text, onClick, type }) => {
    return (
        <button
            className={`btn ${type === 'primary' ? 'btn btn-dark' : 'btn-light'}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button