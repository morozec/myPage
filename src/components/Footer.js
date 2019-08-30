import React from 'react'
import {Container} from 'reactstrap'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVk, faTelegram, faGithub} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'

import profile from '../profile.json'

const Footer = () => (
    <footer>
        <hr />
        <Container>       
            <a href={`mailto:${profile.contacts.email}`}><FontAwesomeIcon icon={faEnvelope} /></a>    
            <a href={`${profile.contacts.vk}`}><FontAwesomeIcon icon={faVk} /></a>    
            <a href={`https://t.me/${profile.contacts.telegram}`}><FontAwesomeIcon icon={faTelegram} /></a>
            <a href={`${profile.contacts.github}`}><FontAwesomeIcon icon={faGithub} /></a>
        </Container>
    </footer>
)
export default Footer