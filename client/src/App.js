import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Registration from "./register";

function App() {
  return (
    <Router>
      <div className="App">
        <h2>Not quick enough to build react app :(</h2>
        {/* <Route exact path="/" render={props => <Login {...props} />} /> */}
        <Route
          exact
          path="/register"
          render={props => <Registration {...props} />}
        />
        {/* <Route path="/home" render={props => <Home {...props} />} /> */}
      </div>
    </Router>
  );
}

export default App;
