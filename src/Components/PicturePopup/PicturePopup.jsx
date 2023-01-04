import React from 'react'
import './PicturePopup.scss'

function PicturePopup(props) {
    return (
        <div classNane="box">
            <img className='box__image' src={props.image}></img>
        </div>
    )
}

export default PicturePopup