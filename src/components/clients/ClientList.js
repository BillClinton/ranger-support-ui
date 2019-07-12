import React from "react";
import { connect } from "react-redux";
import { fetchClients } from "../../actions";
import ClientItem from "./ClientItem";
import ClientTestData from "../../apis/ClientTestData";

class ClientList extends React.Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  renderList() {
    return this.props.clients.map(client => {
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
