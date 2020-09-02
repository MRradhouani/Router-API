import React from 'react';
import './App.css';
import UserList from "./component/UserList";
import Profile from "./component/Profile";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">


      <Router>
        <h1> Hello app </h1>
        <Switch>
          <Route exact path="/" component={UserList} />
          <Route exact path="/profile/:userId" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
