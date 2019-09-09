import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import profile from '../profile.json'
import moment from 'moment'
import 'moment/locale/ru'  // without this line it didn't work
import { Media } from 'reactstrap'

const getDuration = (duration) => {
    const years = parseInt(duration / 12)
    const months = duration % 12
    let yearsStr = ""
    if (years > 0){
        yearsStr += years
        if (years % 10 === 1) yearsStr += ' год'
        else if (years % 10 === 2 || years % 10 === 3 || years % 10 === 4) yearsStr += ' года'
        else yearsStr += ' лет'
    } 

    let monthStr = ""
    if (months > 0){
        if (years > 0) monthStr += " "
        monthStr += months        
        if (months % 10 === 1) monthStr += ' месяц'
        else if (months % 10 === 2 || months % 10 === 3 || months % 10 === 4) monthStr += ' месяца'
        else monthStr += ' месяцев'
    } 
   
    return yearsStr + monthStr;
}

const Experience = () => {
    return <Container>
        <Row>
            <Col>
                {profile.experiences.map((experience, i) => {
                    moment.locale('ru')      

                    const totalDuration = experience.roles.reduce((cnt, role) => {
                        const startDate = moment(role.startDate)
                        const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate))
                        const duration = moment.duration(timeEnd.diff(startDate))
                        return Number(cnt) + Number(duration.asMonths().toPrecision(1))
                    }, 0)

                    return (
                        <div key={i}>
                            <Media>
                                <Media left top href={experience.url}>
                                    <Media object src={experience.logo} alt={experience.companyName} className='radius'/>
                                </Media>
                                <Media body>
                                    <Media heading>
                                        <a href={experience.url}>{experience.companyName}</a>
                                        <span className="jobTotalDuration">{getDuration(totalDuration)}</span>
                                    </Media>

                                    {experience.roles.map((role, j) => {
                                        const startDate = moment(role.startDate)                                       
                                        const timeEnd = moment(role.currentJob ? new Date() : new Date(role.endDate))
                                        const duration = Number(moment.duration(timeEnd.diff(startDate)).asMonths().toPrecision(1))

                                        return <div key={j}>
                                            <h5>{role.title}</h5>
                                            <span className='jobDuration'>{startDate.format('MMM YYYY')} - {role.currentJob ? 'по настоящее время' : timeEnd.format('MMM YYYY')} ({getDuration(duration)})</span>
                                            <p className='jobLocation'>{role.location}</p>                                           
                                            {role.descriptions.map((description, k) => <p key={k} className='jobDescription'>
                                                {description}
                                            </p>)}
                                        </div>
                                    })}
                                </Media>
                            </Media>
                        </div>
                    )
                })}
            </Col>
        </Row>
    </Container>
}

export default Experience