import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
//import ClientTestData from "../apis/ClientTestData";
import ClientList from "./clients/ClientList";
import ClientForm from "./clients/ClientForm";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <Router history={history}>
          <div>
            <Header />
            <Route path="/clients" component={ClientList} />
            <Route path="/clients/new" exact component={ClientForm} />
          </div>
        </Router>
      </div>
    );

    /*
      <div className="ui container">
        <div className="ui container">
          <ClientForm client={ClientTestData[3]} />
        </div>
        <div className="ui container">
          <ClientList clients={ClientTestData} />
        </div>
      </div>
      */
  }
}

export default App;
