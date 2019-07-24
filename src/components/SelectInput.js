import React from "react";
import { Form, Dropdown } from "semantic-ui-react";

class SelectInput extends React.Component {
  componentDidMount() {
    //this.props.fetchOptions();
    console.log(this.props);
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

  render() {
    const { input, label, meta, options } = this.props;
    const fieldClass = `field ${meta.error && meta.touched ? "error" : ""}`;

    /*
     * value lost on blur issue:
     * https://github.com/JedWatson/react-select/issues/805
     */
    const onBlurFix = () => input.onBlur(input.value.value);

    return (
      <div className={fieldClass}>
        <label>
          {label} {this.renderError(meta)}{" "}
        </label>
        <Form.Field>
          <Dropdown
            search
            selection
            {...input}
            options={options}
            value={input.value}
            onChange={(param, data) => input.onChange(data.value)}
            onBlur={onBlurFix}
            placeholder={`Select ${label}`}
          />
        </Form.Field>
      </div>
    );
  }
}

export default SelectInput;
