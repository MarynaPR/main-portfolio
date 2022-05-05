import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function About() {

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container about-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['a', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <h2>I am enthusiastic full-stack web developer looking for a role in established IT company with the opportunity to work with the latest technologies on challenging and diverse projects.
          </h2>
          <h2>
            I am naturally curious and continuously working on improving my skills one design problem at a time.
          </h2>
          <h2>Unconventional maker of positive changes and advocate for kindness - in coding bootcamp awarded "most likely to prevent others from throwing their laptop out a window'. </h2>
        </div>
        {/* CUBE */}
        <div className='stage-cube-cont'>
          <div className='cubespinner'>

            <div className='face1'>
              <FontAwesomeIcon icon={faAngular} color='#DD0031' />
            </div>
            <div className='face2'>
              <FontAwesomeIcon icon={faHtml5} color='#F06529' />
            </div>
            <div className='face3'>
              <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      < Loader type="pacman" />
    </>
  )
}

export default About