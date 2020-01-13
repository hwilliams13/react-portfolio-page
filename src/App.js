import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './Logob71c1c_transbg640.svg';
import profilePic from './profile_pic.jpg';
import phone from '../icons/smartphone.svg';
import linkedIn from './icons/linkedin.svg';
import gitHub from './icons/github.svg';
import gMail from './icons/gmail.svg';
import acrobat from './icons/adobeacrobat.svg';
import './App.css';

// import MainPage from './components/MainPage.js'; MainPage component not really necessary
import About from './components/About.js';
import Projects from './components/Projects.js';
import MyInfo from './components/MyInfo.js';

class App extends React.Component {

  state = {
    currentYear: ''
  }

  getCurrentYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    this.setState({currentYear: currentYear})
  }

  jumpToSection = (e) => {
    const targetId = e.target.innerHTML.toLowerCase();
    const element = document.getElementById(targetId);
    console.log(targetId);
    element.scrollIntoView(
      {
        behavior: 'smooth',
      }
    );
  }

  componentDidMount() {
    this.getCurrentYear();
  }

  render() {
    return (
      // <MainPage 
      //   logo={logo}
      //   profilePic={profilePic}
      //   linkedIn={linkedIn}
      //   gitHub={gitHub}
      //   gMail={gMail}
      //   currentYear={this.state.currentYear}/>
      <div>
        <header>
            <img id="header-logo" src={logo} alt="logo" onClick={() => {
              const element = document.getElementById('about');
              element.scrollIntoView(
                {
                  behavior: 'smooth',
                }
              );
            }} />
            <nav>
                {/* <a href="#about"> going to use scrollIntoView() */}
                    <div className="nav-button" data-id="about" onClick={this.jumpToSection}>ABOUT</div>
                {/* </a> */}
                {/* <a href="#projects"> */}
                    <div className="nav-button" data-id="projects" onClick={this.jumpToSection}>PROJECTS</div>
                {/* </a> */}
                <a href="#about">
                    <div className="nav-button" data-id="my-info" onClick={this.jumpToSection}>MY INFO</div>
                </a>
                <a href="#about">
                    <div className="nav-button">THANKS</div>
                </a>
            </nav>
        </header>
        <main>
            <About 
                profilePic={profilePic} />
            <Projects />
            <MyInfo 
                phone={phone}
                gMail={gMail}
                linkedIn={linkedIn}
                gitHub={gitHub}
                acrobat={acrobat} />
        </main>
        <footer>
            <small><span>&copy;</span>{this.state.currentYear} Harold Lee Williams</small>
            <div id="footer-contact-info">
                <a rel="noopener noreferrer" href="http://www.linkedin.com/in/harold-williams-3b208132" target="_blank">
                    <img className="footer-contact-icon" src={linkedIn} alt="LinkedIn Logo" />
                </a>
                <a rel="noopener noreferrer" href="https://github.com/hwilliams13" target="_blank">
                    <img className="footer-contact-icon" src={gitHub} alt="GitHub Logo" />
                </a>
                <a href="mailto: harold.williams.87@gmail.com">
                    <img className="footer-contact-icon" src={gMail} alt="Gmail Logo" />
                </a>
            </div>
        </footer>
      </div>
    );
  }
}

export default App;
