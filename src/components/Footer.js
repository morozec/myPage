import React from 'react'
import {Container} from 'reactstrap'
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer>
        <hr />
        <Container>           
            <a href="https://github.com/morozec"><FontAwesomeIcon icon={faGithub} /></a>
        </Container>
    </footer>
)
export default Footer