import React from "react";
import { Field, reduxForm } from "redux-form";
import SelectInput from "../SelectInput";

class JobForm extends React.Component {
  componentWillMount() {
    this.props.initialize(this.props.defaultValues);
  }

  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <span style={{ float: "right" }}>
          <i aria-hidden="true" className="warning circle icon" />
          {error}
        </span>
      );
    }
  }

  renderInput = ({ input, label, meta }) => {
    const fieldClass = `field ${meta.error && meta.touched ? "error" : ""}`;

    return (
      <div className={fieldClass}>
        <label>
          {label} {this.renderError(meta)}{" "}
        </label>
        <input {...input} autoComplete="off" />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <div className="sixteen wide field">
            <Field
              name="title"
              component={this.renderInput}
              label="Job Title"
            />
          </div>
          <div className="two fields">
            <div className="ten wide field">
              <Field
                name="client_id"
                component={SelectInput}
                label="Client"
                options={this.props.clientOptions}
              />
            </div>
            <div className="six wide field">
              <Field
                name="staff_id"
                component={SelectInput}
                label="Staff"
                options={this.props.staffOptions}
              />
            </div>
          </div>
          <div className="three fields">
            <div className="four wide field">
              <Field name="hours" component={this.renderInput} label="Hours" />
            </div>
            <div className="six wide field">
              <Field
                name="hours_type_id"
                component={SelectInput}
                label="Type"
                options={this.props.hoursTypeOptions}
              />
            </div>
            <div className="six wide field">
              <Field
                name="job_status_id"
                component={SelectInput}
                label="Status"
                options={this.props.jobStatusOptions}
              />
            </div>
          </div>
          <div className="sixteen wide field" />
          <div className="sixteen wide field" />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  console.log("validate");
  const errors = {};
  if (!formValues.title) {
    errors.title = "required";
  }
  if (!formValues.client_id) {
    errors.client_id = "required";
  }
  if (!formValues.hours) {
    errors.hours = "required";
  }
  if (!formValues.staff_id) {
    errors.staff_id = "required";
  }
  if (!formValues.hours_type_id) {
    errors.hours_type_id = "required";
  }
  if (!formValues.job_status_id) {
    errors.job_status_id = "required";
  }
  return errors;
};

export default reduxForm({
  form: "job-form",
  validate
})(JobForm);
