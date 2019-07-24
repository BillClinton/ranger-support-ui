import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import ClientHome from "./clients/ClientHome";
import JobHome from "./jobs/JobHome";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui">
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <div>
            <NavBar />
            <Switch>
              <Route path="/clients" component={ClientHome} />
              <Route path="/jobs" component={JobHome} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
