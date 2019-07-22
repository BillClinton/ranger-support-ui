import React from "react";
import Modal from "../Modal";
import { connect } from "react-redux";
import { fetchClient, deleteClient } from "../../actions";
import history from "../../history";

class ClientDelete extends React.Component {
  componentDidMount() {
    this.props.fetchClient(this.props.match.params.id);
  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteClient(id)}
          className="ui button negative"
        >
          Delete
        </button>
        <button onClick={() => this.onDismiss()} className="ui button">
          Cancel
        </button>
      </React.Fragment>
    );
  }

  onDismiss = () => {
    history.goBack();
  };

  renderContent() {
    if (!this.props.client) {
      return "Are you sure you want to delete this client?";
    }
    return `Are you sure you want to delete ${this.props.client.name}?`;
  }

  render() {
    return (
      <Modal
        title="Delete Client"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={this.onDismiss}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { client: state.clients[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchClient, deleteClient }
)(ClientDelete);
