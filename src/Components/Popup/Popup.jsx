import React from 'react'
import './Popup.scss'
import 'animate.css';
function Popup({click}) {
    return (
        <div className='popup-container'>
            <div className='popup'>
                <p className='popup__text'>Please fill out the form</p>
                <button onClick={click} className='popup__button'>close</button>
            </div>
        </div>
    )
}

export default Popup