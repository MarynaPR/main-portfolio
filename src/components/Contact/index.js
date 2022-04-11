import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser'
import './index.scss'

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefaul()

        emailjs
            .sendForm(
                'gmail',
                // template custom from emailjs
                'ttemplate_usyi2nw',
                'form.current',
                // add my token from email-js
                'My-token'
            ).then(
                () => {
                    alert('Message Successfully Sent!').window.location.reload(false)
                }, () => {
                    alert('Failed to send the message, please try again.')
                })
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <p>I'd love to hear from you! Feel free to contact me using the form below.</p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='name' placeholder='name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='email' placeholder='email' required />
                                </li>
                                <li>
                                    <input placeholder='subject' type='text' name='subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
            <Loader type='pacman' />
        </>
    )
}

export default Contact