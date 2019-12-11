import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import logo from './Logo212121_transbg640.svg';
import './App.css';

function App() {

  // state = {

  // }

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
    // <Router>
    //   <Switch>
    //     <Route>

    //     </Route>
    //   </Switch>
    // </Router>
    <div>
      <header>
        <img id="header-logo" src={'./Logob71c1c_transbg512.png'} />
        <nav>
          <div className="nav-button">ABOUT</div>
          <div className="nav-button">PROJECTS</div>
          <div className="nav-button">THANK YOU</div>
        </nav>
      </header>
      <main>
        <section id="about">
          <div className="placeholder"></div>
          <div className="section-body">
            <div className="section-header">
              <h1>Digital Engineer | Atypical Nerd | Sports Lover</h1>
              <p>From Legos to lines of code, blocks are blocks and I love to build</p>
            </div>
            <div>
              <p>I've always had a passion for creating. My love for Legos led to my degree in Mechanical Engineering. Seeing friends enjoying their switch into software sparked my interest in building in the digital world. Hearing of the better work-life balance sealed the deal and now I look forward to my future as a developer.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
