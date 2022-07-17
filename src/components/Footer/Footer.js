import React from 'react'
import "./Footer.css"

const Footer = () => {
    const d = new Date();

    return (
        <div className='footer'>
            ©{d.getFullYear()} Copyright to <a target="_blank" rel='noopener noreferrer' href="https://github.com/sagarkumarmishra"> Sagar</a>
        </div>
    )
}

export default Footer
