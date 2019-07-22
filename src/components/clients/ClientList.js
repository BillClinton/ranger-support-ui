import React from "react";
import { connect } from "react-redux";
import { fetchClients } from "../../actions";
import { Link } from "react-router-dom";
import ClientItem from "./ClientItem";

class ClientList extends React.Component {
  componentDidMount() {
    console.log("mount");
    this.props.fetchClients();
  }

  renderList() {
    return this.props.clients.map(client => {
      return <ClientItem key={client.id} client={client} />;
    });
  }

  renderCreate1() {
    return "";
  }

  renderCreate() {
    return (
      <Link
        to="/clients/new"
        aria-label="create client"
        style={{ marginLeft: "1em" }}
        className="ui mini icon button"
      >
        <i aria-hidden="true" className="plus icon" />
      </Link>
    );
  }

  renderSearch() {
    return (
      <div className="ui action input">
        <input type="text" placeholder="Search..." />
        <button className="ui icon button">
          <i className="search icon" />
        </button>
      </div>
    );
  }

  renderHeader() {
    return (
      <div className="ui grid">
        <div className="six wide column">
          <h3 style={{ marginTop: "0", display: "inline-block" }}>Clients</h3>
          {this.renderCreate()}
        </div>
        <div className="ten wide right aligned column">
          {this.renderSearch()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
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
  return {
    clients: Object.values(state.clients)
  };
};

export default connect(
  mapStateToProps,
  { fetchClients }
)(ClientList);
