import React from 'react'
import pos from '../../assets/projects/PocketPos.gif'
import './MyWorkPage.scss'
import git from '../../assets/images/gitHub.png'
import brain from '../../assets/projects/Brain.gif'
import bandsite from '../../assets/projects/bandsite.gif'
import bench from '../../assets/projects/bench.gif'
import benchD from '../../assets/images/group.jpeg'
import instock from '../../assets/projects/instock.gif'

function MyWorkPage() {
    return (
        <div className='projects'>
            <h1 className='projects__heading'>my projects</h1>
            <div className='project'>
                <img className='project__video' src={pos} alt="project-gif"/>
                <div className='project__description'>
                    <h3 className='project__name'>Pocket - POS</h3>
                    <p className='project__text'>Full-Stack</p>
                    <p className='project__text'>PocketPOS is a web application for front of house workers of service industry to keep track of their gratuity earnings, total sales and tip-outs. As well as providing all required functionality to have POS system available on the chosen device to organize order taking and shift organization.</p>
                    <p className='project__text'> HTML / CSS / JavaScript / ReactJS / NodeJS / ExpressJS / axios / MySQL</p>
                    <div className='project__git-box'>
                        <a className='project__git-link' href="https://github.com/SokolovskiyA/PocketPOS_capstone"><img className='project__git' alt="git-hub" src={git}/><p>Front-End Repository</p></a>
                        <a className='project__git-link' href="https://github.com/SokolovskiyA/pocket_pos_backend"><img className='project__git' alt="git-hub" src={git}/><p>Back-End Repository</p></a>
                    </div>
                </div>
            </div>
            <div className='project'>
                <img className='project__video' src={brain} alt="project-gif"/>
                <div className='project__description'>
                    <h3 className='project__name'>BrainFlix</h3>
                    <p className='project__text'>Full-Stack</p>
                    <p className='project__text'>A prototype for a new video streaming platform called BrainFlix. Website createb according to mockup provided by designer. Functionality to add new video and comment manipulation created according to technical specification for the project proided by BrainStation. </p>
                    <p className='project__text'> HTML / CSS / JavaScript / ReactJS / NodeJS / ExpressJS / axios</p>
                    <div className='project__git-box'>
                        <a className='project__git-link' href="https://github.com/SokolovskiyA/BrainFlix"><img className='project__git' alt="git-hub" src={git}/><p>Front-End Repository</p></a>
                        <a className='project__git-link' href="https://github.com/SokolovskiyA/sokolovskiy-a-brainflix-api"><img className='project__git' alt="git-hub" src={git}/><p>Back-End Repository</p></a>
                    </div>
                </div>
            </div>
            <div className='project'>
                <img className='project__video' src={bandsite} alt="project-gif"/>
                <div className='project__description'>
                    <h3 className='project__name'>Bandsite</h3>
                    <p className='project__text'>Front-End</p>
                    <p className='project__text'>Multiple page website with comment functionality created in vanila JavaScript according to design provided.</p>
                    <p className='project__text'>HTML / CSS / JavaScript / axios</p>
                    <div className='project__git-box'>
                        <a className='project__git-link' href="https://github.com/SokolovskiyA/AlexSokolovskiy-Bandsite"><img className='project__git' alt="git-hub" src={git}/><p>Project Repository</p></a>
                    </div>
                </div>
            </div>
            <h1 className='projects__heading'>collaborations</h1>
            <div className='project'>
                <div className='industry'>
                    <img className='industry__video' src={benchD} alt="project-gif"/>
                    <img className='industry__video' src={bench} alt="project-gif"/>
                </div>
                <div className='project__description'>
                    <h3 className='project__name'>Industry Project</h3>
                    <p className='project__text'>Sponsored by Bench Accounting</p>
                    <p className='project__text'>Working in a team of professionals from different departments (Web Design, Data Analysis, Web Development) come up with a solution for a problem provided by Bench Accounting. Final task is to Improve Bench's client sign-up flow to increase conversions for monthly bookkeeping.</p>
                    <p className='project__text'>Our solution took a path of bringing final product of the company closer to a consumer by making it easily accesable for demo within 1 click on a company website, as well as make the demonstration more interractive</p>
                    <p className='project__text'> HTML / CSS / JavaScript / ReactJS / NodeJS </p>
                    <div className='project__git-box'>
                        <a className='project__git-link' href="https://github.com/SokolovskiyA/industry-project-bench"><img className='project__git' alt="git-hub" src={git}/><p>Project Repository</p></a>
                    </div>
                </div>
            </div>
            <div className='project'>
                <img className='project__video' src={instock} alt="project-gif"/>
                <div className='project__description'>
                    <h3 className='project__name'>InStock</h3>
                    <p className='project__text'>Full-Stack</p>
                    <p className='project__text'>Working in a team with oher developers using git and GitHub to create fully functional inventory control app within 1 week.</p>
                    <p className='project__text'> HTML / CSS / JavaScript / ReactJS / NodeJS / ExpressJS / MySQL/ KnexJS / axios</p>
                    <div className='project__git-box'>
                        <a className='project__git-link' href="https://github.com/jto1995/InstockFrontend"><img className='project__git' alt="git-hub" src={git}/><p>Front-End Repository</p></a>
                        <a className='project__git-link' href="https://github.com/theconfusedindian/instock-backend"><img className='project__git' alt="git-hub" src={git}/><p>Back-End Repository</p></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyWorkPage