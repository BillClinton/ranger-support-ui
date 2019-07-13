import React from "react";
import { Field, reduxForm } from "redux-form";

class ClientForm extends React.Component {
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
              name="name"
              component={this.renderInput}
              label="Client Name"
            />
          </div>
          <div className="two fields">
            <div className="ten wide field">
              <Field
                name="contact"
                component={this.renderInput}
                label="Primary Contact Name"
              />
            </div>
            <div className="six wide field">
              <Field
                name="contact_number"
                component={this.renderInput}
                label="Primary Contact Number"
              />
            </div>
          </div>
          <div className="two fields">
            <div className="ten wide field">
              <Field
                name="address1"
                component={this.renderInput}
                label="Address"
              />
            </div>
            <div className="six wide field">
              <Field name="city" component={this.renderInput} label="City" />
            </div>
          </div>
          <div className="three fields">
            <div className="ten wide field">
              <Field
                name="address2"
                component={this.renderInput}
                label="Address line 2"
              />
            </div>
            <div className="three wide field">
              <Field
                name="us_state_id"
                component={this.renderInput}
                label="State"
              />
            </div>
            <div className="three wide field">
              <Field name="zip" component={this.renderInput} label="Zip" />
            </div>
          </div>
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  console.log("validate");
  const errors = {};
  if (!formValues.name) {
    errors.name = "required";
  }
  return errors;
};

export default reduxForm({
  form: "client-form",
  validate
})(ClientForm);
