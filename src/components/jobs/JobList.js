import React from "react";
import { connect } from "react-redux";
import { fetchJobs, searchJobs } from "../../actions";
import { Link } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Table, Button } from "semantic-ui-react";

class JobList extends React.Component {
  componentDidMount() {
    this.props.fetchJobs();
  }

  onSearchFieldChange = event => {
    console.log(event.target.value);
    //this.props.searchJobs(event.target.value);
  };

  renderActionButtons(job) {
    return (
      <span style={{ whiteSpace: "nowrap" }}>
        <Link to={`/jobs/edit/${job.id}`} className="ui tiny icon button">
          <i aria-hidden="true" className="edit icon" />
        </Link>
      </span>
    );
  }

  renderRows() {
    return this.props.jobs.map(job => {
      return (
        <Table.Row key={job.job_id}>
          <Table.Cell>{job.hours_date}</Table.Cell>
          <Table.Cell>{job.client_name}</Table.Cell>

          <MediaQuery minWidth={700}>
            <Table.Cell>{job.hours_type}</Table.Cell>
          </MediaQuery>
          <Table.Cell>{job.billable}</Table.Cell>

          {/* TODO: put this style in a css class */}
          <Table.Cell>{this.renderActionButtons(job)}</Table.Cell>
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
                to="/jobs/new"
                aria-label="create job"
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
                  to="/jobs/new"
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
          <h3 style={{ marginTop: "0", display: "inline-block" }}>Jobs</h3>
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
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Client</Table.HeaderCell>
            <MediaQuery minWidth={700}>
              <Table.HeaderCell>Type</Table.HeaderCell>
            </MediaQuery>
            <Table.HeaderCell>Hours</Table.HeaderCell>
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
    jobs: Object.values(state.jobs)
  };
};

export default connect(
  mapStateToProps,
  { fetchJobs, searchJobs }
)(JobList);
