import React from 'react';
// import { Link } from 'react-router-dom';

import About from './About.js';
import Projects from './Projects.js';

class MainPage extends React.Component {

    render() {
        return (
            <div>
                <header>
                    <img id="header-logo" src={this.props.logo} alt="logo" />
                    <nav>
                        {/* <a href="#about"> going to use scrollIntoView() */}
                            <div className="nav-button">ABOUT</div>
                        {/* </a> */}
                        <a href="#projects">
                            <div className="nav-button">PROJECTS</div>
                        </a>
                        <a href="#about">
                            <div className="nav-button">THANKS</div>
                        </a>
                    </nav>
                </header>
                <main>
                    <About 
                        profilePic={this.props.profilePic}/>
                    <Projects />
                </main>
                <footer>
                    <small><span>&copy;</span>{this.props.currentYear} Harold Lee Williams</small>
                    <div id="footer-contact-info">
                        <a rel="noopener noreferrer" href="http://www.linkedin.com/in/harold-williams-3b208132" target="_blank">
                            <img className="footer-contact-icon" src={this.props.linkedIn} alt="LinkedIn Logo" />
                        </a>
                        <a rel="noopener noreferrer" href="https://github.com/hwilliams13" target="_blank">
                            <img className="footer-contact-icon" src={this.props.gitHub} alt="GitHub Logo" />
                        </a>
                        <a href="mailto: harold.williams.87@gmail.com">
                            <img className="footer-contact-icon" src={this.props.gMail} alt="Gmail Logo" />
                        </a>
                    </div>
                </footer>
            </div>
        )
    }
}

export default MainPage;