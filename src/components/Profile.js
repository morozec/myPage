import React, { useState } from 'react'
import { Jumbotron, Container, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import Experience from './Experience'
import Education from './Education'
import profile from '../profile.json'
import classnames from 'classnames';

const Profile = () => {
    const [activeTab, setActiveTab] = useState(1)

    return (
        <div>
            <Jumbotron>
                <Container>
                    <h1 className='display-3'>{profile.title}</h1>
                    <p className='lead'>{profile.summary}</p>
                </Container>
            </Jumbotron>

            <Container>
                <Nav tabs>
                    <NavItem>
                        <NavLink className={classnames({ active: activeTab === 1 }, {navLink:true})}
                            onClick={() => setActiveTab(1)}>
                            Experience
                        </NavLink>
                    </NavItem>

                    <NavItem >
                        <NavLink className={classnames({ active: activeTab === 2 }, {navLink:true})}
                            onClick={() => setActiveTab(2)}>
                            Education
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
                </TabContent>

            </Container>
        </div>
    )
}
export default Profile