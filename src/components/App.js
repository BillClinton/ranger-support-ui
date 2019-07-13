import React from "react";
import { Router, Route } from "react-router-dom";
import Header from "./Header";
//import ClientTestData from "../apis/ClientTestData";
//import ClientList from "./clients/ClientList";
import ClientsHome from "./clients/ClientsHome";
//import ClientCreate from "./clients/ClientCreate";
//import ClientEdit from "./clients/ClientEdit";
//import ClientView from "./clients/ClientView";
import history from "../history";
//import ScrollToTop from "./ScrollToTop";

class App extends React.Component {
  render() {
    return (
      <div className="ui">
        <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
          <div>
            <Header />
            <ClientsHome />
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
