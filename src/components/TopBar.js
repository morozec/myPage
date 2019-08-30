import React, {useState} from 'react'
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import profilePic from '../img/me.jpg'
import {Link} from 'react-router-dom'


const TopBar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <Navbar color='dark' dark expand='md'>
            <Container>
                <NavbarBrand tag={Link} to="/">
                    <img src={profilePic} className='profile-pic' alt='Andrei Morozov'/>
                    <span>Андрей Морозов</span>
                </NavbarBrand>

                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink tag={Link} to ="/about">Обо мне</NavLink>
                        </NavItem>                       
                    </Nav>                    
                </Collapse>
            </Container>
        </Navbar>
    )
}

export default TopBar