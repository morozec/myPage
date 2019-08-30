import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import profile from '../profile.json'


const Contacts = () => <Container>
    {profile.contacts.email && 
    <Row>
        <Col className='formLabel'>E-mail</Col><Col><a href={`mailto:${profile.contacts.email}`}> {profile.contacts.email} </a></Col>
    </Row>}
    {profile.contacts.vk && 
    <Row>
        <Col className='formLabel'>ВКонтакте</Col><Col><a href={profile.contacts.vk}>{profile.contacts.vk}</a></Col>
    </Row>}
    {profile.contacts.telegram && 
    <Row>
        <Col className='formLabel'>Telegram</Col><Col><a href={`https://t.me/${profile.contacts.telegram}`}>{profile.contacts.telegram}</a></Col>
    </Row>}
</Container>

export default Contacts