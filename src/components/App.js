import React from "react";

import ClientTestData from "../apis/ClientTestData";
import ClientList from "./ClientList";
import ClientForm from "./ClientForm";

class App extends React.Component {
  render() {
    return (
      <div className="ui container">
        <div className="ui container">
          <ClientForm client={ClientTestData[3]} />
        </div>
        <div className="ui container">
          <ClientList clients={ClientTestData} />
        </div>
      </div>
    );
  }
}

export default App;
