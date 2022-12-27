import React from 'react'
import './ContactsPage.scss'
function ContactsPage() {
    return (
        <div className="contact">
            <h1 className='contact__heading'>contact me</h1>
            <form className='contact__form'>
                <label className="contact__label" >tell me who you are</label>
                <input className='contact__input' type="text" placeholder='ypur name'/>
                <label className="contact__label">how can i get back to you</label>
                <input className='contact__input' type="email" placeholder='your email'/>
                <input className='contact__input' type="tel" name="phone"
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        required placeholder='your phone number'/>
                <label className="contact__label">What problem I can help you with?</label>
                <textarea className='contact__input' rows="5" cols="50" placeholder='your message'/>
                <button type="submit" className="contact__button">DO IT!</button>
            </form>
        </div>
    )
}

export default ContactsPage