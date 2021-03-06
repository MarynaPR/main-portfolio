import React, { useEffect, useState } from 'react'
import './index.scss'
import LogoTitle from '../../assets/images/m-yellow.png'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
// import Logo from './Logo'
import Loader from 'react-loaders'
import Typical from 'react-typical'


function Home() {

    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'r', 'y', 'n', 'a']
    const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
            <div className='container home-page'>
                <div className='text-zone'>
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass}_12`}>i,</span>
                        <br />
                        <span className={`${letterClass}_13`}>I</span>
                        <span className={`${letterClass}_14`}>'m</span>

                        <img src={LogoTitle} alt="developer" />
                        <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15} /> <br />
                        <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22} /> <br />

                    </h1>
                    <br />
                    <h2>
                        {/* Frontend Developer / Code Expert /110 Tabs Opener */}
                        <Typical
                            loop={Infinity}
                            wrapper="p"
                            steps={[
                                'Enthusiastic Coder 💻',
                                3000,
                                'Ardent Learner 🌍',
                                2000,
                                "110 Tabs Opener", 3000
                            ]} />
                    </h2>
                    <Link to='/contact' className='flat-button'>CONTACT ME</Link>
                </div>
                {/* <Logo /> */}
            </div>
            <Loader type='pacman' />
        </>

    )
}

export default Home
