import React from 'react'
import hero from '../../assets/images/hero.jpeg'
import portrait from '../../assets/images/portrait.jpeg'
import restaurant from '../../assets/images/restaurant.jpeg'
import './HomePage.scss'
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs'
import ContactsPage from '../ContactsPage/ContactsPage'

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
                            <p className='about__left-text'>Hello and welcome to my story of great transformation and finding a new and amazing hobbie that changed my life.</p>
                            <p className='about__left-text'>I started my professional life in service industry. For more then 10 years restaurants has been my work and passion. However, I`ve always </p>
                        </div>
                        <div className='about__right'>
                            <h1 className="about__heading">About Me</h1>
                            <p className="about__title">"I try to influence life of many people by creating meaningfull and usefull technologies"</p>
                            <img src={restaurant} alt="restaurant"/>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
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