import React from 'react'
import {Container, Row, Col, Media} from 'reactstrap'
import moment from 'moment'
import 'moment/locale/ru'  // without this line it didn't work
import profile from '../profile.json'

const getYearDuration = (year) => {
    if (year % 10 === 1) return year + " год"
    if (year % 10 === 2 || year % 10 === 3 || year % 10 === 4) return year + " года"
    return year + " лет"
}

const Education = () => (
    <Container>
        <Row>
            <Col>
                {profile.studies.map((study,i) => {
                    moment.locale('ru')
                    return <Media key={i}>
                        <Media left top href={study.url}>
                            <Media object src={study.logo} alt={study.institute}/>
                        </Media>
                        <Media body>
                            <Media heading>
                                <a href={study.url}>{study.institute}</a>
                            </Media>
                            {
                                [
                                    {
                                        "key":"Специальность",
                                        "value":study.title
                                    },                                    
                                    {
                                        "key":"Год выпуска",
                                        "value":study.graduationYear
                                    },
                                    {
                                        "key":"Длительность обучеия",
                                        "value":getYearDuration(study.durationInYears)
                                    }
                                ].map((object, i) => <div key={i}>
                                    <Row>
                                        <Col className='formLabel'>{object.key}</Col>
                                    </Row>
                                    <Row>
                                        <Col>{object.value}</Col>
                                    </Row>
                                </div>)
                            }
                        </Media>
                    </Media>
                })}
            </Col>
        </Row>
        <br/>
        <br/>

        <Row>
            <Col>
            <h4>Сертификаты:</h4>
            <hr />
            {profile.certifications.map((certification, i) => {
                const verification = certification.verificationLink ? 
                <Row>
                    <Col>
                        <a className='certificateLink' href={certification.verificationLink}>Сертификат</a>
                    </Col>
                </Row> : ""
                return <Media key={i}>
                    <Media left top href={certification.url}>
                        <Media object src={certification.logo} alt={certification.title} />
                    </Media>
                    <Media body>
                        <Media heading>
                            <a href={certification.url}>{certification.title}</a>
                        </Media>
                        <Row>
                            <Col>{moment(certification.issueDate).format('MMM YYYY')}</Col>
                        </Row>
                        <Row>
                            <Col>{certification.issuer}</Col>
                        </Row>
                        {verification}
                    </Media>
                </Media>
            })}
            </Col>
        </Row>

    </Container>
)
export default Education