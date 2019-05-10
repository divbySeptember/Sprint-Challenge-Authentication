import React, { Component } from "react";
import baseUrl from "../config/baseURL.js";
import axios from "axios";

export class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleLoginChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  login = e => {
    e.preventDefault();

    const loggedUser = {
      username: this.state.username,
      password: this.state.password
    };

    axios
      .post("/auth/login", loggedUser)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/jokes");
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="login">
        <h1>Welcome back</h1>
        <form className="login-form" onSubmit={this.login}>
          <input
            className="login-username"
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleLoginChanges}
            placeholder="Enter Username"
            autoComplete="off"
            required
          />
          <input
            className="login-password"
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleLoginChanges}
            placeholder="Enter Password"
            autoComplete="off"
            required
          />
          <button>SIGN IN</button>
        </form>
      </div>
    );
  }
}

export default Login;
