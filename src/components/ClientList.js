import React from "react";
import ClientItem from "./ClientItem";

const ClientList = ({ clients, onClientSelect }) => {
  const renderedList = clients.map(client => {
    return (
      <ClientItem
        key={client.id}
        onClientSelect={onClientSelect}
        client={client}
      />
    );
  });

  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th colSpan="3">Clients</th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Contact Number</th>
        </tr>
      </thead>
      <tbody>{renderedList}</tbody>
    </table>
  );
};

export default ClientList;
