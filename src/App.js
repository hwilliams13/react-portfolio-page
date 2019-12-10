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
        <br className="placeholder"/>
        <section id>

        </section>
      </main>
    </div>
  );
}

export default App;
