import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

function Portfolio() {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className='container portfolio-page'>
        <div className='text-zone'>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['m', 'y', ' ', 'w', 'o', 'r', 'k']}
              idx={15}
            />
          </h1>
          <p>Welcome to my portfolio page!  </p>
          <p>Click on the project for Github and live demo.</p>
        </div>

        {/* Projects */}
        <div className='portfolio-wrap'>
          <div className='portfolio-section'>
            <div className='github'>
              <FontAwesomeIcon icon={faGithub} />

            </div>
          </div>
        </div>
      </div>

      < Loader type="pacman" />
    </>
  )
}

export default Portfolio
