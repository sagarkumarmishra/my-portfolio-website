import React from 'react'
import SocialContact from '../../common/social-contact/SocialContact'
import "./About.css"

const About = () => {
    return (
        <div className='about'>
            <div className="about-top">
                <div className='about-info'>
                    Hello There 🤘🏻, I am <br /> <span className='info-name'>Sagar Kumar Mishra,</span> <br /> Graduate of computer science <br /><span className='info-line'> and a data science enthusiast. </span>
                </div>
                <div className='about-photo'>
                    <img src="https://github.com/debanjan-exe/debanjan-exe/raw/main/Code%20typing-pana.png?raw=true" alt="img" className='picture' />
                </div>
            </div>
            <SocialContact />
        </div>
    )
}

export default About
