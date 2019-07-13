import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
//import ClientTestData from "../apis/ClientTestData";
import ClientList from "./clients/ClientList";
import ClientCreate from "./clients/ClientCreate";
import ClientEdit from "./clients/ClientEdit";
import ClientView from "./clients/ClientView";
import history from "../history";

class App extends React.Component {
  render() {
    return (
      <div className="ui">
        <Router history={history}>
          <div>
            <Header />
            <div className="ui container">
              <Route path="/clients" exact component={ClientList} />
              <Route path="/clients/new/" exact component={ClientCreate} />
              <Route path="/clients/edit/:id" exact component={ClientEdit} />
              <Route path="/clients/view/:id" exact component={ClientView} />
            </div>
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
