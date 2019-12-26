import React from 'react';

import simonGameSS from '../simon_game_ss_640.png';
import rambleGameSS from '../ramble_game_ss_640.png';

import css3 from '../icons/css3.svg';
import firebase from '../icons/firebase.svg';
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
                            {/* <div className="flip-card">
                                <div className="flip-card-inner">
                                    <div className="flip-card-front">
                                        <img src={simonGameSS} alt="Avatar" style={{width: "400px", height: "auto"}} />
                                    </div>
                                    <div className="flip-card-back">
                                        <div className="card-back-text">
                                            <p>Simon</p>
                                            <p>For this project, I created a Simon emulator.
                                                <br />
                                                The game has the same rules as the traditional Simon game.
                                            </p>
                                            <ul>
                                                <li>The player has a time limit to make each guess in a sequence</li>
                                                <li>The sequence length will increase by one after each round This emulator also has some unique features</li>
                                                <li>Pick between 3 difficulty levels that each have their own speed of play
                                                    <br />
                                                    <ul>
                                                        <li>Easy - 1 second between each note; 2 seconds per guess</li>
                                                        <li>Normal(Default) - 3/4 second between each note; 1.5 seconds per guess</li>
                                                        <li>Hard - 1/2 second between each note; 1 second per guess</li>
                                                    </ul>
                                                </li>
                                                <li>Play with either the keyboard or the mouse
                                                    <br />
                                                    <ul>
                                                        <li>Use the keys shown on the board to correspond to the buttons</li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <img src={simonGameSS} alt="Simon Snapshot" style={{width: "auto", height: "400px"}} />
                            <div className="skill-section">
                                <p>Skills Demonstrated:</p>
                                <ul className="skill-list">
                                    <li className="skill-container">
                                        <img className="skill-icon" src={html5} alt="HTML5 icon" />
                                        <p>   HTML5</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={css3} alt="CSS3 icon" />
                                        <p>   CSS3</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={javaScript} alt="Javascript icon" />
                                        <p>   JavaScript</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={git} alt="Git icon" />
                                        <p>   Git</p>
                                    </li>
                                </ul>
                            </div>
                        </a>
                        <a className="project-container" rel="noopener noreferrer" href="https://play-ramble.herokuapp.com/" target="_blank">
                            <img src={rambleGameSS} alt="Avatar" style={{width: "auto", height: "400px"}} />
                            <div className="skill-section">
                                <p>Skills Demonstrated:</p>
                                <ul className="skill-list">
                                    <li className="skill-container">
                                        <img className="skill-icon" src={reactIcon} alt="React JS icon" />
                                        <p>   React</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={node} alt="Node JS icon" />
                                        <p>   Node</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={mongoDB} alt="MongoDB icon" />
                                        <p>   MongoDB</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={html5} alt="HTML5 icon" />
                                        <p>   HTML5</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={css3} alt="CSS3 icon" />
                                        <p>   CSS3</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={javaScript} alt="Javascript icon" />
                                        <p>   JavaScript</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={git} alt="Git icon" />
                                        <p>   Git</p>
                                    </li>
                                </ul>
                            </div>
                        </a>
                        <br />
                        {/* <a className="project-container" rel="noopener noreferrer" href="https://play-ramble.herokuapp.com/" target="_blank">
                            <img src={rambleGameSS} alt="Avatar" style={{width: "auto", height: "400px"}} />
                            <div className="skill-section">
                                <p>Skills Demonstrated:</p>
                                <ul className="skill-list">
                                    <li className="skill-container">
                                        <img className="skill-icon" src={reactIcon} />
                                        <p>   React</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={node} />
                                        <p>   Node</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={mongoDB} />
                                        <p>   MongoDB</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={html5} />
                                        <p>   HTML5</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={css3} />
                                        <p>   CSS3</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={javaScript} />
                                        <p>   JavaScript</p>
                                    </li>
                                    <li className="skill-container">
                                        <img className="skill-icon" src={git} />
                                        <p>   Git</p>
                                    </li>
                                </ul>
                            </div>
                        </a> */}
                        {/* <div id="about-full">
                            <p>I've always had a passion for creating. My love for Legos led to my degree in Mechanical Engineering. Seeing friends enjoying their switch into software sparked my interest in building in the digital world. Hearing of the better work-life balance sealed the deal and now I look forward to my future as a developer.</p>
                        </div> */}
                    </div>
                </div>
            </section>
        )
    }
}

export default Projects;