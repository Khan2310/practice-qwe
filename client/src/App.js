import React, { Component } from "react";
import LoginComponent from "./component/login-component";
import AboutComponent from "./component/about-component";
import ProfileComponent from "./component/profile-component";
import HomeComponent from "./component/home-component";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { setAuthToken } from "./utils/authUtils";
const isauth = false;

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          {isauth ? (
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
                <li
                  onClick={() => {
                    localStorage.removeItem("token");
                    window.location.href = "/login";
                    setAuthToken(null);
                  }}
                >
                  Logout
                </li>
              </ul>
            </nav>
          ) : null}
          <div>
            <Switch>
              {/* <Route exact path="/login" component={LoginComponent} />
              <Route exact path="/" component={HomeComponent} />
              <Route exact path="/about" component={AboutComponent} />
              <Route exact path="/profile" component={ProfileComponent} />
              <Route exact path="*" component={() => <p> Page not found</p>} /> */}
              <PrivateRoute path="/" component />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
