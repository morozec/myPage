import React, { useState } from 'react'
import { Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Experience from './Experience'
import Education from './Education'
import MainProjects from './MainProjects'
import profile from '../profile.json'
import classnames from 'classnames';

import { Route, Switch } from 'react-router';
import About from './About'

const Profile = () => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1 className='j-header'>{profile.title}</h1>
                    <p className='lead'>{profile.summary}</p>
                </Container>
            </Jumbotron>

            <Switch>
                <Route exact path='/about' component={About} />               

                <Route path='/' render={props =>
                    <Container>
                        <Nav tabs>
                            <NavItem>
                                <NavLink className={classnames({ active: activeTab === 1 }, { navLink: true })}
                                    onClick={() => setActiveTab(1)}>
                                    Опыт работы
                                </NavLink>
                            </NavItem>

                            <NavItem >
                                <NavLink className={classnames({ active: activeTab === 2 }, { navLink: true })}
                                    onClick={() => setActiveTab(2)}>
                                    Образование
                                </NavLink>
                            </NavItem>

                            <NavItem >
                                <NavLink className={classnames({ active: activeTab === 3 }, { navLink: true })}
                                    onClick={() => setActiveTab(3)}>
                                    Основные проекты
                                </NavLink>
                            </NavItem>
                        </Nav>

                        <TabContent activeTab={activeTab}>
                            <TabPane tabId={1}>
                                <Experience />
                            </TabPane>

                            <TabPane tabId={2}>
                                <Education />
                            </TabPane>

                            <TabPane tabId={3}>
                                <MainProjects />
                            </TabPane>
                        </TabContent>
                    </Container>
                } />
            </Switch>
        </div>
    )
}
export default Profile