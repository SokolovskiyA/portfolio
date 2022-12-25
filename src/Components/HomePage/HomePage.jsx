import React from 'react'
import hero from '../../assets/images/hero.jpeg'
import portrait from '../../assets/images/portrait.jpeg'
import restaurant from '../../assets/images/restaurant.jpeg'
import './HomePage.scss'
import { Tab, TabPanel, Tabs, TabList } from 'react-tabs'

function HomePage() {
    return (
        <div>
            <section className='hero'>
                <img className='hero__image' src={hero} alt='hero'/>
                <div className='hero__text'>  
                    <div className='hero__name'>
                        <h1>Sokol</h1>
                        <h1>ov</h1>
                        <h1>skiy</h1>
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
                        </div>
                        <div className='about__right'>
                            <h1 className="about__heading">About Me</h1>
                            <p className="about__title">"every new beginning comes from some other beginnings end"</p>
                            <img src={restaurant} alt="restaurant"/>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                </TabPanel>
                <TabPanel>
                </TabPanel>
                </Tabs>
            </section>
        </div>
    )
}

export default HomePage