import React from "react";
import ClientItem from "./ClientItem";

const ClientList = ({ clients, onClientSelect }) => {
  const renderedList = clients.map(client => {
    return (
      <ClientItem
        key={client.id.clientId}
        onClientSelect={onClientSelect}
        client={client}
      />
    );
  });

  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default ClientList;
