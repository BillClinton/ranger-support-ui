import React from "react";

import ClientTestData from "../apis/ClientTestData";
import ClientList from "./ClientList";

class App extends React.Component {
  render() {
    return (
      <div>
        <ClientList clients={ClientTestData} />
      </div>
    );
  }
}

export default App;
