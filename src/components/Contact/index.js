import React, { useEffect, useRef, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import emailjs from '@emailjs/browser';
import L from "leaflet";

import './index.scss'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

function Contact() {
    const [letterClass, setLetterClass] = useState('text-animate')
    const form = useRef()
    console.log("text2")

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const sendEmail = (e) => {
        e.preventDefaul();

        emailjs.sendForm(
            `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
            `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
            form.current,
            `${process.env.REACT_APP_YOUR_USER_ID}`
        )
            .then((result) => {
                console.log(result.text, "success");
            }, (error) => {
                console.log(error.text, "try again");
            });
    }
    function setItem(_iconSize, _iconAnchor) {
        return L.icon({
            iconUrl: require('../../assets/images/leaf.png'),
            iconSize: _iconSize,
            iconAnchor: [35, 68], // point of the icon which will correspond to marker's location
        })
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1 className='h-element'>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['c', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15} />
                    </h1>
                    <h2 className='p-element'>Got questions? Want to share something? I'd love to hear from you!</h2>
                  <br/>
                    <div className='contact-form'>

                        <form
                            ref={form}
                            onSubmit={sendEmail} >
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
                {/* LOCATION */}
                <div className='info-map'>
                    current location:<br />
                    Madison, WI<br /> USA<br />

                    <span>pryadkamaryna@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer
                        center={[43.073051, -89.401230]}
                        zoom={4}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[43.073051, -89.401230]} icon={setItem(80, [])}>
                            <Popup
                            >Maryna lives here, come over for a cup of tea ????</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type='pacman' />

        </>

    )
}

export default Contact