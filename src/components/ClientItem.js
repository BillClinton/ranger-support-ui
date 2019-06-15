import React from "react";

const ClientItem = ({ client, onClientSelect }) => {
  return (
    <div className="item" onClick={() => onClientSelect(client)}>
      <div className="content">
        <div className="header">{client.name}</div>
      </div>
    </div>
  );
};

export default ClientItem;
