import React from "react";
import { connect } from "react-redux";
import { fetchClients, searchClients } from "../../actions";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Table, Button } from "semantic-ui-react";

class ClientList extends React.Component {
  componentDidMount() {
    this.props.fetchClients();
  }

  onSearchFieldChange = event => {
    console.log(event.target.value);
    //this.props.searchClients(event.target.value);
  };

  renderActionButtons(client) {
    return (
      <span style={{ whiteSpace: "nowrap" }}>
        <Link to={`/clients/edit/${client.id}`} className="ui tiny icon button">
          <i aria-hidden="true" className="edit icon" />
        </Link>
        <Link
          to={`/clients/delete/${client.id}`}
          className="ui tiny icon button"
        >
          <i aria-hidden="true" className="times icon" />
        </Link>
      </span>
    );
  }

  renderRows() {
    return this.props.clients.map(client => {
      return (
        <Table.Row>
          <Table.Cell>{client.name}</Table.Cell>

          <MediaQuery minWidth={700}>
            <Table.Cell>{client.contact}</Table.Cell>
            <Table.Cell>{client.contact_number}</Table.Cell>
          </MediaQuery>

          {/* TODO: put this style in a css class */}
          <Table.Cell>{this.renderActionButtons(client)}</Table.Cell>
        </Table.Row>
      );
    });
  }

  renderCreate() {
    return (
      <MediaQuery minWidth={700}>
        {matches => {
          if (matches) {
            return (
              <Button
                icon="plus"
                size="mini"
                as={Link}
                to="/clients/new"
                aria-label="create client"
                style={{ marginLeft: "1em" }}
              />
            );
          } else {
            return (
              <div className="floating-action-button">
                <Button
                  circular
                  icon="plus"
                  size="huge"
                  color="black"
                  as={Link}
                  to="/clients/new"
                />
              </div>
            );
          }
        }}
      </MediaQuery>
    );
  }

  renderSearch() {
    return (
      <div className="ui left icon input">
        <input
          type="text"
          placeholder="Search..."
          onChange={this.onSearchFieldChange}
        />
        <i className="horizontally flipped search icon" />
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

  renderTable() {
    return (
      <Table basic unstackable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <MediaQuery minWidth={700}>
              <Table.HeaderCell>Contact</Table.HeaderCell>
              <Table.HeaderCell>Contact #</Table.HeaderCell>
            </MediaQuery>
            <Table.HeaderCell align="center">Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{this.renderRows()}</Table.Body>
      </Table>
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.renderHeader()}
        {this.renderTable()}
      </React.Fragment>
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
  { fetchClients, searchClients }
)(ClientList);
