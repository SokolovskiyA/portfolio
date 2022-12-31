import React from 'react'
import hero from '../../assets/images/hero.jpeg'
import portrait from '../../assets/images/portrait.jpeg'
import restaurant from '../../assets/images/restaurant.jpeg'
import './HomePage.scss'
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs'
import ContactsPage from '../ContactsPage/ContactsPage'
import MyWorkPage from '../MyWorkPage/MyWorkPage'

function HomePage() {

    return (
        <div>
            <section className='hero'>
                <img className='hero__image' src={hero} alt='hero'/>
                <div className='hero__text'>  
                    <div className='hero__name'>
                        <h1>Alex</h1>
                        <h1>Sokolovskiy</h1>
                    </div>
                    <p className='hero__moto'>...help people surf the web</p>
                    <h1 className='hero__tag'>web developer</h1>
                </div>
            </section>
            <section>
            <Tabs direction={'rtl'}>
                <TabList>
                    <Tab>About</Tab>
                    <Tab>my work</Tab>
                    <Tab>contacts</Tab>
                </TabList>
                <TabPanel>
                    <div className='about'>
                        <div className='about__left'>
                            <img className="about__portrait" src={portrait} alt="portrait"/>
                            <p className='about__text'>This career path also helped me to develop proficiency and understanding of time management, sense of urgency,  task organization, process organization, communication, and most importantly ability to solve complex problems in a fast pace stressful environment. I could never guess that these skills will be so useful in my new path of Web Development</p>
                        </div>
                        <div className='about__right'>
                            <h1 className="about__heading">About Me</h1>
                            <p className='about__text'>
                            Hello and welcome to my story of career transformation. My name is Alex Sokolovskiy, Ive started my professional journey in restaurant industry and in 14 years developed my skills to become effective and knowledgeable manager. 
                            </p>
                            <img className='about__restaurant' src={restaurant} alt="restaurant"/>
                        </div>
                        <div>  
                            <p className='about__text about__text-bottom'>And finally in September 2022 made a strong decision to elevate my skills to the next level by joining BrainStation web development diploma program. 
                            The results were amazing. I gain knowledge and understanding of full cycle of web application development, brought my knowledge of javascript to a new level, learned ReactJS, NodeJS and build multiple complex full-stack projects that are ready to deploy. 
                            Im confident in my skills and looking for opportunities to apply them in professional environment as soon as I can. 
                            Im constantly looking for a new projects and would like to hear from you if you think i might be a good fit for your company. 
                            </p>
                        </div>
                        <div className='education'>
                            <img/>
                            <img/>
                            <img/>
                            <img/>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <MyWorkPage />
                </TabPanel>
                <TabPanel>
                    <ContactsPage/>
                </TabPanel>
                </Tabs>
            </section>
        </div>
    )
}

export default HomePage