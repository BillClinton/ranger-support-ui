import React from "react";
import { Link } from "react-router-dom";

const ClientItem = ({ client }) => {
  return (
    <tr>
      <td data-label="Name">{client.name}</td>
      <td data-label="Contact">{client.contact}</td>
      <td data-label="Contact Number">{client.contact_number}</td>
      <td data-label="Actions">
        <Link to={`/clients/edit/${client.id}`} className="ui icon button">
          <i aria-hidden="true" className="edit icon" />
        </Link>
        <button className="ui icon button">
          <i aria-hidden="true" className="times icon" />
        </button>
      </td>
    </tr>
  );
};

export default ClientItem;