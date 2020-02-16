import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRibbon } from '@fortawesome/free-solid-svg-icons'
import { Button, TextInput } from 'react-materialize';

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
        <Link to="/login">
          <Button
            node="button"
            className="login"
            waves="light"
          >
            LOGIN
        </Button>
        </Link>
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
    <div className="signup">
      <div className="top">


        <span className="ribbon-icon">
          <FontAwesomeIcon icon={faRibbon} />
        </span>
        <h1>Epilepsy Daily</h1>
      </div>
      <div className="textfields">
        <h1>SIGNUP</h1>
        <TextInput label="Username" />
        <TextInput label="Email" />
        <TextInput label="Password" />
        <TextInput label="Password Confirm" />
      </div>
      <Button
        node="button"
        className="login"
        waves="light"
      >
        Submit
        </Button>
    </div>
  );
}

function Login() {
  return (
    <div className="signup">
      <div className="top">
        <span className="ribbon-icon">
          <FontAwesomeIcon icon={faRibbon} />
        </span>
        <h1>Epilepsy Daily</h1>
      </div>
      <div className="textfields">
        <h1>LOGIN</h1>
        <TextInput label="Username" />
        <TextInput label="Password" />
      </div>
      <Button
        node="button"
        className="login"
        waves="light"
      >
        Submit
        </Button>
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
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
