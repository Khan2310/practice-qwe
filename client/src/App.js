import React, { Component } from "react";
import LoginComponent from "./component/login-component";
import ComponentsRoute from "./component/components-route"

class App extends Component {
  state = {
    isLogin: true
  }
  render() {
    return (
      <div className="App">
        { this.state.isLogin ? <ComponentsRoute/>: <LoginComponent/>}
      </div>
    );
  }
}

export default App;