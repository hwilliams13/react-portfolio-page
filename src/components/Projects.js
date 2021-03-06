import React from 'react';

import simonGameSS from '../simon_game_ss_640.png';
import rambleGameSS from '../ramble_game_ss_640.png';

import css3 from '../icons/css3.svg';
import firebase from '../icons/firebase.svg';
import googleCloud from '../icons/googlecloud.svg';
import netlify from '../icons/netlify.svg';
import git from '../icons/git.svg';
import gitHub from '../icons/github.svg';
import heroku from '../icons/heroku.svg';
import html5 from '../icons/html5.svg';
import javaScript from '../icons/javascript.svg';
import mongoDB from '../icons/mongodb.svg';
import node from '../icons/node-dot-js.svg';
import postgreSQL from '../icons/postgresql.svg';
import python from '../icons/python.svg';
import reactIcon from '../icons/react.svg';

import '../Projects.css';

class Projects extends React.Component {

    render() {
        return (
            <section id="projects">
                <div className="placeholder"></div>
                <div className="section-body">
                    <div className="section-header">
                        <p className="section-title">Projects</p>
                        {/* <p id="blurb-2">From Legos to lines of code, blocks are blocks and I love to build</p> */}
                    </div>
                    <div id="projects-pic-section">
                        <a className="project-container" rel="noopener noreferrer" href="https://objective-albattani-69d5ab.netlify.com/" target="_blank">
                            <p className="project-title">SIMON</p>
                            <img className="project-pic" src={simonGameSS} alt="Simon Snapshot" />
                            <div className="project-info">
                                <div className="project-about-section">
                                    <br />
                                    <ul className="project blurb">
                                        <li>Simon simulator with 3 dificulty modes</li>
                                        <li>Tracks user score within session</li>
                                        <li>Can play with the TYGH keys</li>
                                    </ul>
                                </div>
                                <div className="skill-section">
                                    <br />
                                    <ul className="skill-list">
                                    <li className="skill-container">
                                            <img className="skill-icon" src={netlify} alt="Netlify icon" />
                                            <p>Netlify</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={html5} alt="HTML5 icon" />
                                            <p>HTML5</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={css3} alt="CSS3 icon" />
                                            <p>CSS3</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={javaScript} alt="Javascript icon" />
                                            <p>JavaScript</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={git} alt="Git icon" />
                                            <p>Git</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={gitHub} alt="GitHub icon" />
                                            <p>GitHub</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                        <a className="project-container" rel="noopener noreferrer" href="https://play-ramble.herokuapp.com/" target="_blank">
                            <p className="project-title">RAMBLE</p>
                            <img className="project-pic" src={rambleGameSS} alt="Avatar" />
                            <div className="project-info">
                                <div className="project-about-section">
                                    <br />
                                    <ul className="project blurb">
                                        <li>2 player Scrabble simulator that can host multiple games</li>
                                        <li>All game state information stored in a MongoDB database and served to each player</li>
                                    </ul>
                                </div>
                                <div className="skill-section">
                                    <br />
                                    <ul className="skill-list">
                                        <li className="skill-container">
                                            <img className="skill-icon" src={reactIcon} alt="React JS icon" />
                                            <p>React</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={node} alt="Node JS icon" />
                                            <p>Node</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={mongoDB} alt="MongoDB icon" />
                                            <p>MongoDB</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={heroku} alt="Heroku icon" />
                                            <p>Heroku</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={html5} alt="HTML5 icon" />
                                            <p>HTML5</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={css3} alt="CSS3 icon" />
                                            <p>CSS3</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={javaScript} alt="Javascript icon" />
                                            <p>JavaScript</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={git} alt="Git icon" />
                                            <p>Git</p>
                                        </li>
                                        <li className="skill-container">
                                            <img className="skill-icon" src={gitHub} alt="GitHub icon" />
                                            <p>GitHub</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;