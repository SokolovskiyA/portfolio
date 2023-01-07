import React from 'react'
import hero from '../../assets/images/hero.jpeg'
import portrait from '../../assets/images/portrait.jpeg'
import restaurant from '../../assets/images/restaurant.jpeg'
import './HomePage.scss'
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs'
import ContactsPage from '../ContactsPage/ContactsPage'
import MyWorkPage from '../MyWorkPage/MyWorkPage'
import css from '../../assets/images/CSS.jpeg'
import html from '../../assets/images/HTML.jpeg'
import brainstation from '../../assets/images/brainstation.jpeg'
import group from '../../assets/images/group.jpeg'
import SocialSection from '../SocialSection/SocialSection'
import htmlLogo from '../../assets/skills-logo/html.png'
import cssLogo from '../../assets/skills-logo/css.png'
import js from '../../assets/skills-logo/javascript.png'
import sass from '../../assets/skills-logo/sass.png'
import express from '../../assets/skills-logo/expressjs.png'
import axios from '../../assets/skills-logo/axios.png'
import node from '../../assets/skills-logo/nodejs.png'
import react from '../../assets/skills-logo/react.png'





function HomePage() {

    return (
        <div>
            <section className='hero'>
                <img className='hero__image' src={hero} alt='hero'/>
                <div className='hero__text'>  
                    <div className='hero__name'>
                        <h1>Alex Sokolovskiy</h1>
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
                            <p className='about__text about__text-left'>During this time, I was able to recognize the importance, gain and, furthermore, master such pivotal skills as time management, sense of urgency, task and process organization, communication, and, most importantly, ability to solve complex problems in a fast paced stressful environment. These proficiencies have since been proven instrumental in my new career as a Web Developer.</p>
                        </div>
                        <div className='about__right'>
                            <h1 className="about__heading">Me as a professional</h1>
                            <p className='about__text'>My name is Alex Sokolovskiy and this is my ongoing story of career transformation from restaurant manager to a Full-Stack Web Developer.</p>
                            <p className='about__text'>My journey started in the hospitality and restaurant industry 14 years ago. </p>
                            <img className='about__restaurant' src={restaurant} alt="restaurant"/>
                        </div>
                        <div>  
                            <p className='about__text about__text-bottom'>In September 2020, I made a firm decision to build on the above-mentioned skills and gain new knowledge by joining BrainStation’s web development diploma program. The results were amazing. I have become highly skilled at full cycle of web application development, brought my expertise of javascript to a new level, learned ReactJS, NodeJS and built a portfolio of complex full-stack projects that are ready to deploy.
                            While my learning and development journey is lifelong, I`m confident in my skills and looking for opportunities to apply them in a professional environment as soon as I can. I`m constantly looking for new projects and connections and would like to hear from you if you think my experience can be proven useful to you and your organization. 
                            </p>
                        </div>
                        <div className='education'>
                            <img className="education__credentials" src={css} alt="credentials"/>
                            <img className="education__credentials" src={group} alt="credentials"/>
                            <img className="education__credentials" src={html} alt="credentials"/>
                            <img className="education__credentials" src={brainstation} alt="credentials"/>
                        </div>
                        <div className='stack'>
                            <h2 className="stack__heading">What I use to build</h2>
                            <div className="stack__icons">
                                <img className="stack__logo" src={htmlLogo} alt="technology"/>
                                <img className="stack__logo" src={cssLogo} alt="technology"/>
                                <img className="stack__logo" src={js} alt="technology"/>
                                <img className="stack__logo" src={sass} alt="technology"/>
                                <img className="stack__logo" src={react} alt="technology"/>
                                <img className="stack__logo" src={node} alt="technology"/>
                                <img className="stack__logo" src={express} alt="technology"/>
                                <img className="stack__logo" src={axios} alt="technology"/>
                            </div>
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
            <SocialSection />
        </div>
    )
}

export default HomePage