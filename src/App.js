import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-materialize';

import './App.scss';


function Landing() {
  return (
    <div className="landing">
      <div className="top">


        <span className="ribbon-icon">
          <FontAwesomeIcon icon={faRibbon} />
        </span>
        <h1>Epilepsy Daily</h1>
      </div>
      <div className="buttons">
        <Button
          node="button"
          className="login"
          waves="light"
        >
          LOGIN
        </Button>
        <Link to="/signup">
          <Button
            flat
            node="button"
            className="signup"
            waves="light"
          >
            SIGNUP
        </Button>
        </Link>
      </div>
    </div>
  );
}

function Signup() {
  return (
    <div className="landing">
      <div className="top">


        <span className="ribbon-icon">
          <FontAwesomeIcon icon={faRibbon} />
        </span>
        <h1>Epilepsy Daily</h1>
      </div>
      <div className="buttons">
        <Button
          node="button"
          className="login"
          waves="light"
        >
          LOGIN
        </Button>
        <Button
          flat
          node="button"
          className="signup"
          waves="light"
        >
          SIGNUP
        </Button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
