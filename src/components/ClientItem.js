import React from "react";

const ClientItem = ({ client, onClientSelect }) => {
  return (
    <tr>
      <td data-label="Name">{client.name}</td>
      <td data-label="Contact">{client.contact}</td>
      <td data-label="Contact Number">{client.contact_number}</td>
    </tr>
  );
};

export default ClientItem;
