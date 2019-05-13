import React, { Component } from "react";
import axios from "axios";
import axiosAuth from "../auth/axiosAuth.js";

class Jokes extends Component {
  state = {
    jokes: []
  };

  render() {
    return (
      <div>
        <h1>Jokes</h1>
        <ul>
          {this.state.jokes.map(j => (
            <li key={j.id}>{j.joke}</li>
          ))}
        </ul>
      </div>
    );
  }

  componentDidMount = () => {
    const endpoint = "/jokes";
    axios
      .get(endpoint)
      .then(res => this.setState({ jokes: res.data }))
      .catch(err => console.error("JOKES ERROR", err));
  };
}

export default axiosAuth(Jokes);
