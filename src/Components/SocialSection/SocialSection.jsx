import React from 'react'
import './SocialSection.scss'
import insta from '../../assets/images/insta.png'
import facebook from '../../assets/images/facebook.png'
import github from '../../assets/images/gitHub.png'
import linked from '../../assets/images/linkedin.png'

function SocialSection() {
    return (
        <section className="social">
            <a href="https://www.instagram.com/sokoloffskiy/" target="_blank"><img className="social__icon" src={insta} alt="insta" /></a>
            <a href="https://www.facebook.com/sokolovskiy1/" target="_blank"><img className="social__icon" src={facebook} alt="facebook"/></a>
            <a href="https://www.linkedin.com/in/alexandersokolovskiy/" target="_blank"><img className="social__icon" src={linked} alt="linkedIn"/></a>
            <a href="https://github.com/SokolovskiyA" target="_blank"><img className="social__icon" src={github} alt="github"/></a>
        </section>
    )
}

export default SocialSection