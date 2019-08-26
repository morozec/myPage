import React, {useState} from 'react'
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import profilePic from '../me.jpg'


const TopBar = () => {
    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }

    return (
        <Navbar color='dark' dark expand='md'>
            <Container>
                <NavbarBrand href="/">
                    <img src={profilePic} className='profile-pic' alt='Andrei Morozov'/>
                    <span>Andrei Morozov</span>
                </NavbarBrand>

                {/* <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href="/profile/">Profile</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse> */}
            </Container>
        </Navbar>
    )
}

export default TopBar