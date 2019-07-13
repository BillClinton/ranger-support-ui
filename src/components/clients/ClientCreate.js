import React from "react";
import { connect } from "react-redux";
import { createClient } from "../../actions";
import ClientForm from "./ClientForm";

class ClientCreate extends React.Component {
  onSubmit = formValues => {
    console.log("on submit - create client");
    this.props.createClient(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create A Client</h3>
        <ClientForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createClient }
)(ClientCreate);
