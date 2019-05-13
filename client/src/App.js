import React, { Component } from "react";
import { Route } from "react-router-dom";

import Nav from "./components/Nav.js";
import Home from "./components/Home.js";
import Register from "./components/Register.js";
import Login from "./components/Login.js";
import Jokes from "./components/Jokes.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Nav />
        </header>
        <main>
          <Route exact path="/" component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </div>
    );
  }
}

export default App;
