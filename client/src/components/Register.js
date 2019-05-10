import React, { Component } from "react";
import baseUrl from "../config/baseURL.js";
import axios from "axios";

export class Register extends Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        <h2>Register to see all the awesome Jokes!</h2>
        <form className="form" onSubmit={this.register}>
          <input
            className="reg-username"
            type="type"
            name="username"
            value={this.state.username}
            onChange={this.handleRegChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          <input
            className="reg-password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleRegChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          <button>Register Now</button>
        </form>
      </div>
    );
  }

  handleRegChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  register = e => {
    e.preventDefault();
    let newUser = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("/auth/register", newUser)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => console.log(err));
  };
}

export default Register;
