import React, { Component } from "react";
import { BrowserRouter as Router, Redirect, Route, Link } from "react-router-dom"; 
import AboutComponent from "./about-component";
import ProfileComponent from "./profile-component";
import HomeComponent from "./home-component";
import LoginComponent from "./login-component";
import PageNotFoundComponent from "./page-note-found-component"

export default class ComponentsRoute extends Component {
  render() {
    return (
      <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
            <Link to="/profile/">Profile</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomeComponent} />
        <Route path="/about/" component={AboutComponent} />
        <Route path="/profile/" component={ProfileComponent} />
        <Redirect path="/*" to="/" />
      </div>
    </Router>
    );
  }
}