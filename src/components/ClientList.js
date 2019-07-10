import React from "react";
import ClientItem from "./ClientItem";
import ClientTestData from "../apis/ClientTestData";

class ClientList extends React.Component {
  renderList() {
    return ClientTestData.map(client => {
      return <ClientItem key={client.id} client={client} />;
    });
  }

  render() {
    return (
      <div>
        <h3>Clients</h3>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Contact Number</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

export default ClientList;
