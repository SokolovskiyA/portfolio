import React from 'react'
import './SocialSection.scss'
import insta from '../../assets/images/insta.png'
import facebook from '../../assets/images/facebook.png'
import github from '../../assets/images/gitHub.png'
import linked from '../../assets/images/linkedin.png'


function SocialSection() {
    return (
        <div className='footer'>
            <section className="social">
                <a href="https://www.instagram.com/sokoloffskiy/" ><img className="social__icon" src={insta} alt="insta" /></a>
                <a href="https://www.facebook.com/sokolovskiy1/" ><img className="social__icon" src={facebook} alt="facebook"/></a>
                <a href="https://www.linkedin.com/in/alexandersokolovskiy/" ><img className="social__icon" src={linked} alt="linkedIn"/></a>
                <a href="https://github.com/SokolovskiyA" ><img className="social__icon" src={github} alt="github"/></a>
            </section>
            <div className="contacts">
                <a className="contacts__link" href="mailto:sokolovskiya12@gmail.com?&subject=Website%20Email%20Link&body=Hello%20Alex!%20Can%20you%20help%20me%20with%20" target="_top">sokolovskiya12@gmail.com</a>
                <p className="contacts__text">+1.604.715.1901</p>
            </div>
        </div>
    )
}

export default SocialSection