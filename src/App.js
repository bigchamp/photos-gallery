import React, { Component } from 'react';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import './App.css';
import HomePage from "./containers/HomePage";
import UserPage from "./containers/UserPage"

class App extends Component {
  render() {
    return (

        <Router>
          <div className="App">
            <Route exact path="/" component={HomePage} />
            <Route path="/users/:userId" component={UserPage} />
          </div>
        </Router>
    );
  }
}

export default App;
