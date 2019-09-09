import React from 'react'
import { Container, Row, Col, Media } from 'reactstrap'
import profile from '../profile.json'

const MainProjects = () => (
    <Container>
        <Row>
            <Col>
                {profile.projects.map((project, i) => (
                    <Media key={i}>
                        <Media left top href={project.url}>
                            <Media object src={project.logo} alt={project.projectName} className='radius' />
                        </Media>

                        <Media body>
                            <Media heading>
                                <a href={project.url}>{project.projectName}</a>
                            </Media>

                            <p>{project.description}</p>

                            {project.teammates &&
                                <div>
                                    <div className='formLabel'>Соавторы</div>
                                    <ul>
                                        {project.teammates.map((teammate, j) => (
                                            <li key={j}><a href={teammate.url}>{teammate.name}</a>, {teammate.role}</li>
                                        ))}
                                    </ul>
                                </div>
                            }
                        </Media>
                    </Media>
                ))}


            </Col>
        </Row>
    </Container>
)
export default MainProjects