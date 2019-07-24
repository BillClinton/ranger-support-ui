import React from "react";
import { connect } from "react-redux";
import {
  createJob,
  fetchStaffOptions,
  fetchClientOptions,
  fetchJobStatusOptions,
  fetchHoursTypeOptions
} from "../../actions";
import JobForm from "./JobForm";

class JobCreate extends React.Component {
  componentDidMount() {
    console.log("fetching staff");
    this.props.fetchStaffOptions();
    this.props.fetchClientOptions();
    this.props.fetchJobStatusOptions();
    this.props.fetchHoursTypeOptions();
  }

  onSubmit = formValues => {
    console.log("on submit - create job");
    this.props.createJob(formValues);
  };

  defaultValues = {
    // TODO: replace this with id of logged in user
    staff_id: "2",
    job_status_id: "1",
    hours_type_id: "1"
  };

  render() {
    return (
      <div>
        <h3>Create a Job</h3>
        <JobForm
          defaultValues={this.defaultValues}
          clientOptions={this.props.clients}
          staffOptions={this.props.staff}
          jobStatusOptions={this.props.jobStatus}
          hoursTypeOptions={this.props.hoursType}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    staff: Object.values(state.options.staff),
    clients: Object.values(state.options.clients),
    jobStatus: Object.values(state.options.jobStatus),
    hoursType: Object.values(state.options.hoursType)
  };
};

export default connect(
  mapStateToProps,
  {
    createJob,
    fetchStaffOptions,
    fetchClientOptions,
    fetchJobStatusOptions,
    fetchHoursTypeOptions
  }
)(JobCreate);
