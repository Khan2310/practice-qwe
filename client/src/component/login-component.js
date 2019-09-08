import React, { Component } from "react";

export default class LoginComponent extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className="login-component">
        <h1>Login Component</h1>
        <h3>Name</h3>
        <input type="text" />
        <h3>Password</h3>
        <input type="password" />
      </div>
    );
  }
}
