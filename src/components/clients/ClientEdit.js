import React from "react";
import { connect } from "react-redux";
import { fetchClient, editClient } from "../../actions";
import ClientForm from "./ClientForm";

class ClientEdit extends React.Component {
  componentDidMount() {
    console.log("fetching " + this.props.match.params.id);
    this.props.fetchClient(this.props.match.params.id);
  }

  onSubmit = formValues => {
    this.props.editClient(this.props.match.params.id, formValues);
  };

  render() {
    console.log(this.props);
    if (!this.props.client) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Client</h3>
        <ClientForm
          initialValues={this.props.client}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { client: state.clients[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchClient, editClient }
)(ClientEdit);
