"use strict";
/**
 * src/Components/Form.js
 */
import React from "react";
import PropTypes from "prop-types";

const Form = props => (
  <form onSubmit={props.onSubmit}>
    <input
      type="text"
      value={props.value}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required
    />
    <button>Add Card</button>
  </form>
);

Form.defaultProps = {
  onSubmit: () => {},
  value: "",
  onChange: () => {},
  placeholder: "Place holder",
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Form;
