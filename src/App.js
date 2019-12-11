import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './Logob71c1c_transbg640.svg';
import profilePic from './profile_pic.jpg';
import linkedIn from './icons/linkedin.svg';
import gitHub from './icons/github.svg';
import gMail from './icons/gmail.svg';
import './App.css';

import MainPage from './components/MainPage.js';

class App extends React.Component {

  state = {
    currentYear: ''
  }

  getCurrentYear = () => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    this.setState({currentYear: currentYear})
  }

  componentDidMount() {
    this.getCurrentYear();
  }

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      //     <img src={logo} className="App-logo" alt="logo" />
      //     <p>
      //       Edit <code>src/App.js</code> and save to reload.
      //     </p>
      //     <a
      //       className="App-link"
      //       href="https://reactjs.org"
      //       target="_blank"
      //       rel="noopener noreferrer"
      //     >
      //       Learn React
      //     </a>
      //   </header>
      // </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <MainPage 
              logo={logo}
              profilePic={profilePic}
              linkedIn={linkedIn}
              gitHub={gitHub}
              gMail={gMail}
              currentDate={this.state.currentYear}/>
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
