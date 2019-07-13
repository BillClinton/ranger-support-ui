import React from "react";
import { connect } from "react-redux";
import { fetchClient } from "../../actions";
import { Link } from "react-router-dom";

class ClientView extends React.Component {
  componentDidMount() {
    console.log("fetching " + this.props.match.params.id);
    this.props.fetchClient(this.props.match.params.id);
  }

  renderField(val) {
    if (val) {
      return <p>{val}</p>;
    }
  }

  render() {
    console.log(this.props);
    if (!this.props.client) {
      return <div>Loading...</div>;
    }

    const client = this.props.client;

    return (
      <div>
        <h3 style={{ width: "100%" }}>
          View Client Information
          <Link
            to={`/clients/edit/${client.id}`}
            style={{ marginLeft: "1em" }}
            className="ui icon button"
          >
            <i aria-hidden="true" className="edit icon" />
          </Link>
        </h3>
        {this.renderField(this.props.client.name)}
        {this.renderField(this.props.client.contact)}
        {this.renderField(this.props.client.contact_number)}
        {this.renderField(this.props.client.address1)}
        {this.renderField(this.props.client.address2)}
        {this.renderField(
          [
            this.props.client.city,
            this.props.client.us_state_id,
            this.props.client.zip
          ].join(" ")
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { client: state.clients[ownProps.match.params.id] };
};

export default connect(
  mapStateToProps,
  { fetchClient }
)(ClientView);
