import React from "react";
import { connect } from "react-redux";
import { fetchClients } from "../../actions";
import { Link } from "react-router-dom";
import ClientItem from "./ClientItem";

class ClientList extends React.Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  renderList() {
    return this.props.clients.map(client => {
      return <ClientItem key={client.id} client={client} />;
    });
  }

  renderCreate() {
    return (
      <div style={{ float: "right", marginBottom: "1em" }}>
        <Link to="/clients/new" className="ui primary button">
          Create Client
        </Link>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderCreate()}
        <h3>Clients</h3>
        <table className="ui celled table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>Contact Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>{this.renderList()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    clients: Object.values(state.clients)
  };
};

export default connect(
  mapStateToProps,
  { fetchClients }
)(ClientList);
