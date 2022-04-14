import './index.scss'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/m-yellow.png'
import LogoSubtitle from '../../assets/images/globe-yellow.gif'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser, faCamera } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={Logo} alt="logo" />
                <img className="logo-subtitle" src={LogoSubtitle} alt="logo-subtitle" />
            </Link>

            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to='/portfolio'>
                    <FontAwesomeIcon icon={faCamera} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li><a target='_blank'
                    rel='noreferrer'
                    href='https://www.linkedin.com/in/maryna-pr/'>
                    <FontAwesomeIcon icon={faLinkedin} color='#4d4d4e' /></a>
                </li>
                <li><a target='_blank'
                    rel='noreferrer'
                    href='https://github.com/MarynaPR/'>
                    <FontAwesomeIcon icon={faGithub} color='#4d4d4e' /></a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar