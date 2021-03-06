import React from 'react'
import { Container} from "reactstrap";
import workingMe from '../img/workingme.png'


const About = () => <Container className='about'>
    <div className='about-image-div'><img className='about-image' src={workingMe} alt='Andrei Morozov at work'/></div>
    
       
    
    <p>В 2012 году с отличием закончил ФГБОУ ВО СамГТУ по специальности «Прикладная математика и информатика». Был удостоен звания «Лучший выпускник СамГТУ» с вручением золотой медали. За достигнутые научные результаты студентом был награжден стипендиями Правительства Российской Федерации и Президента Российской Федерации. В том же году получил второе высшее образование по специальности «Переводчик в сфере профессиональной коммуникации (английский язык)».</p>
    
    <p>В 2017 году закончил аспиранту по специальности «01.02.04 – Механика деформируемого твердого тела». Защитил кандидатскую диссертацию по теме <a href="http://d99912202.samgtu.ru/sites/d99912202.samgtu.ru/files/morozov_dis.pdf">«Стохастические модели релаксации остаточных напряжений и кинетика микротвёрдости материала в поверхностно упрочнённых элементах конструкций в условиях ползучести»</a>.</p>
    <p>В настоящий момент работаю главным специалистом отдела информационных технологий АО «Гипровостокнефть».</p>
    <p>Большой фанат чемпионатов по программированию искусственного интеллекта (ботов). Многократный победитель и призер соревнований <a href="https://www.codingame.com/profile/e30da3bac1f2b51be0a5fce9d8380942316019">CodinGame</a>, <a href="https://russianaicup.ru/profile/morozec">Russian AI Cup</a>.</p>
    <p>Женат. Увлекаюсь активными видами спорта – футбол, волейбол, хоккей, лыжи, велосипед – и интеллектуальными играми. Являюсь капитаном команды по «Что? Где? Когда?». Имею первый разряд по шахматам.</p>
    
</Container>
export default About