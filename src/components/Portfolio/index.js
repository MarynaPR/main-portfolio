import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import chains from '../../assets/images/chains.png'
import movie from '../../assets/images/movie.png'
import handyman from '../../assets/images/handyman.png'
import tmax from '../../assets/images/tmax.png'
import wood from '../../assets/images/wood.png'
import './index.scss'


const data = [
  {
    id: 1,
    image: chains,
    title: "24chains gisc gold app",
    github: 'https://github.com/MarynaPR/24-chains',
    demo: 'https://dry-mesa-09626.herokuapp.com/login'
  },
  {
    id: 2,
    image: movie,
    title: "movie app",
    github: 'https://github.com/MarynaPR/movie-app',
    demo: 'https://movie-app-marynapr.vercel.app/'
  },
  {
    id: 3,
    image: handyman,
    title: "website for a handyman services",
    github: 'https://github.com/MarynaPR/Handyman',
    demo: 'https://call1800anatolii.netlify.app'
  },
  {
    id: 4,
    image: tmax,
    title: "scrabble word generator with 2-3 words",
    github: 'https://github.com/MarynaPR/Tally-Max',
    demo: 'https://jgrossh2.github.io/Tally-Max/'
  },
  {
    id: 5,
    image: wood,
    title: "lighting design and engineering services",
    github: 'https://github.com/SMKrizan/WoodlandConsultingLLC',
    demo: 'https://woodland-consulting.herokuapp.com/'
  },
  // {
  //   id: 6,
  //   image: chains,
  //   title: "24chains gisc gold app",
  //   github: 'https://github.com/MarynaPR/24-chains',
  //   demo: 'https://dry-mesa-09626.herokuapp.com/login'
  // },
]

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
          <h2>Welcome to my portfolio page!  </h2>
          <h2>Click on the project for Github and live demo.</h2>
        </div>

        {/* Projects */}

        <div className='portfolio-container'>
          {/* <div className='portfolio-section'> */}

          {
            data.map(({ id, image, title, github, demo }) => {
              return (
                <article key={id} className='portfolio-item'>
                  <div className='portfolio-item-img'>
                    <img className="img-portfolio" src={image} alt={title}></img>
                  </div>

                  <h3>{title}</h3>

                  <div className="portfolio-item-cta">
                    <a href={github} className='btn'>
                      <FontAwesomeIcon icon={faGithub} /></a>
                    <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>
                      <FontAwesomeIcon icon={faBlogger} />
                    </a>
                  </div>
                </article>
              )
            })

          }

          {/* </div> */}
        </div>

      </div>
      < Loader type="pacman" />
    </>
  )
}

export default Portfolio
