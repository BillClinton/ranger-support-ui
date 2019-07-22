import React from "react";
import { Router } from "react-router-dom";
import NavBar from "./NavBar";
import ClientHome from "./clients/ClientHome";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui">
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <div>
            <NavBar />
            <ClientHome />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
